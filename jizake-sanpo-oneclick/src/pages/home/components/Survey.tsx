import { useState } from "react";

// 公開フォームへのリンク。環境変数を設定した場合はそちらを優先します。
const DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScgSIKKsuC3Lc8MYcHsNuWtZpjGTWj04MNDO6KDYnRHxc6qOQ/viewform";
const FORM_URL = (import.meta.env.VITE_GOOGLE_FORM_URL || DEFAULT_FORM_URL).trim();
const ENTRY_INTEREST = (import.meta.env.VITE_GOOGLE_FORM_ENTRY_INTEREST || "").trim();
const ONECLICK_URL = (import.meta.env.VITE_ONECLICK_ENDPOINT || "").trim();
const ENTRY_SOURCE = (import.meta.env.VITE_GOOGLE_FORM_ENTRY_SOURCE || "").trim();

function surveyUrl(source: string, interest?: string) {
  if (!/^https:\/\/docs\.google\.com\/forms\//.test(FORM_URL)) return null;
  const url = new URL(FORM_URL);
  if (ENTRY_SOURCE && /^\d+$/.test(ENTRY_SOURCE)) url.searchParams.set(`entry.${ENTRY_SOURCE}`, source);
  if (interest && ENTRY_INTEREST && /^\d+$/.test(ENTRY_INTEREST)) url.searchParams.set(`entry.${ENTRY_INTEREST}`, interest);
  return url.toString();
}

const interestOptions = ["ほとんど興味がなかった", "少し興味があった", "ある程度興味があった", "とても興味があった"];

export function WelcomeSurvey() {
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const enabled = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(ONECLICK_URL);

  async function submit(option: string) {
    if (!enabled || status === "sending" || status === "sent") return;
    setInterest(option);
    setStatus("sending");
    try {
      // Apps Script はブラウザからの CORS 応答が読めないため no-cors 送信。
      // 成功表示は「送信操作の完了」であり、スプレッドシートへの保存確定ではありません。
      const payload = new URLSearchParams({ interest: option, source: "トップページ", form_key: "jizake-oneclick-v1" });
      await fetch(ONECLICK_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: payload });
      setStatus("sent");
      try { sessionStorage.setItem("jizake-interest-answered", "1"); } catch { /* storage unavailable */ }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="survey-welcome" className="py-10 px-4 bg-background-100/70">
      <div className="max-w-3xl mx-auto rounded-3xl bg-background-50 border border-background-200 p-6 md:p-8 shadow-sm">
        <p className="text-xs font-label font-bold text-primary-600 mb-2">地酒さんぽからのお願い</p>
        <h2 className="font-heading font-bold text-xl text-foreground-950 mb-2">日本酒にはどのくらい興味がありますか？</h2>
        <p className="text-sm text-foreground-600 mb-4">任意の1問アンケートです。答えずにそのまま閲覧できます。</p>
        {enabled ? <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            {interestOptions.map(option => <button key={option} type="button" disabled={status === "sending" || status === "sent"} aria-pressed={interest === option} onClick={() => submit(option)} className={`p-3 rounded-xl border text-left text-sm transition-colors disabled:opacity-70 ${interest === option ? "border-primary-500 bg-primary-100 text-primary-900" : "border-background-200 hover:border-primary-300"}`}>{option}</button>)}
          </div>
          {status === "sending" && <p role="status" className="text-sm text-foreground-600">送信中です…</p>}
          {status === "sent" && <p role="status" className="text-sm text-primary-700">ご協力ありがとうございます。送信しました。</p>}
          {status === "error" && <p role="alert" className="text-sm text-red-700">通信できませんでした。別の選択肢を押すと再試行できます。</p>}
          <p className="mt-2 text-xs text-foreground-500">回答はこの画面で送信します。個人情報の入力は不要です。</p>
        </> : <>
          <p className="text-sm text-foreground-600">ただいま準備中です。集計設定が完了すると、ここからワンクリックで回答できます。</p>
          <a href={surveyUrl("トップページ") || FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 rounded-full px-5 py-2 text-sm font-bold bg-primary-500 text-white">詳しいアンケートに回答する ↗</a>
        </>}
      </div>
    </section>
  );
}

export function DiagnosisSurvey() {
  const url = surveyUrl("診断結果");
  return <div className="mt-6 p-5 rounded-2xl bg-primary-100/50 text-center">
    <h4 className="font-heading font-bold text-foreground-950 mb-2">診断してみて、飲んでみたくなりましたか？</h4>
    <p className="text-sm text-foreground-700 mb-3">わかりやすさや興味の変化を、短いアンケートで教えてください。</p>
    {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary-500 text-white px-5 py-2.5 text-sm font-bold">感想を回答する ↗</a> : <p className="text-xs text-foreground-600">アンケートは準備中です。</p>}
  </div>;
}

export function FeedbackSurvey() {
  const url = surveyUrl("トップページ下部");
  return <section id="feedback" className="px-4 py-14 bg-background-100">
    <div className="max-w-3xl mx-auto text-center rounded-3xl p-8 bg-background-50 border border-background-200">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-3">地酒さんぽの感想を聞かせてください</h2>
      <p className="text-sm text-foreground-700 mb-5">わかりにくい点、便利だった点、もっと知りたいこと。どんな声でもサイト改善の参考になります。回答は任意です。</p>
      {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-primary-500 text-white text-sm font-bold">感想・改善案を送る ↗</a> : <p className="text-sm text-foreground-600">アンケートは準備中です。</p>}
    </div>
  </section>;
}
