export const productConfig = {
  "product": {
    "rank": 17,
    "tier": "P1",
    "score": 66,
    "domain": "ChromeExtension",
    "ideaNo": 8,
    "ideaName": "翻訳・ニュース比較サイドバー",
    "repository": "translation-news-compare-sidebar",
    "publish": "Chrome Web Store",
    "priorityReason": "競合は多いが、比較証跡や引用メモへ寄せると既存学習/引用系と差別化できる。",
    "surface": "Chrome Manifest V3 拡張、popup、options、local storage を備えた検証可能な拡張パッケージ",
    "integration": "",
    "overview": "選択文翻訳、複数記事比較、ニュース横断メモを行う。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "複数ソースの比較や訳文採用が手元に残りにくい。",
    "differentiation": "翻訳結果と出典記事を同じノートに保存する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
