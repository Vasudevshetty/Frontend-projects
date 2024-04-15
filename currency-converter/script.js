let country_list = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const dropdown = document.querySelectorAll(".dropdown select"),
  dropFrom = document.querySelector(".from select"),
  dropTo = document.querySelector(".to select"),
  getButton = document.querySelector("button");

const apiKey = "e031f52f32bda3b634b8e2d8";

for (let i = 0; i < dropdown.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i == 0
        ? currency_code == "USD"
          ? "selected"
          : ""
        : currency_code == "INR"
        ? "selected"
        : "";

    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropdown[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropdown[i].addEventListener("click", (e) => {
    loadFlag(e.target);
    getCurrencyExchange();
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code === element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => getCurrencyExchange());

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getCurrencyExchange();
});

const exchangeIcon = document.querySelector(".icon");
exchangeIcon.addEventListener("click", () => {
  const tempCode = dropFrom.value;
  dropFrom.value = dropTo.value;
  dropTo.value = tempCode;

  loadFlag(dropFrom);
  loadFlag(dropTo);
  getCurrencyExchange();
});

const getCurrencyExchange = function () {
  const amount = document.querySelector("form input").value;
  const exchangeRate = document.querySelector(".exchange-rate");

  const url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${dropFrom.value}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let exchange = data.conversion_rates[dropTo.value];
      let totalAmt = (amount * exchange).toFixed(2);

      exchangeRate.innerText = `${amount} ${dropFrom.value} = ${totalAmt} ${dropTo.value}`;
    })
    .catch(() => (exchangeRate.innerText = "Something went wrong"));
};

getCurrencyExchange("USD");
