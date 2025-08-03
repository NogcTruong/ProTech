"use client"

import Image from "next/image";
import Link from "next/link";
import iconLogo from "@/assets/logos/logo-techpro.png";
import iconFacebook from "@/assets/images/icon-facebook.svg";
import iconYoutube from "@/assets/images/icon-youtube.svg";
import iconTiktok from "@/assets/images/icon-tiktok.svg";
import iconTelegram from "@/assets/images/icon-telegram.svg";
import dmcaProtected from "@/assets/images/dmca_protected_sml_120l.png";
import boCongThuong from "@/assets/images/bo-cong-thuong.png";
import { usePathname } from "next/navigation";

export default function MainFooter() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className={`${isHome ? "bg-[#e0f2fe]" : "bg-white"}  relative pt-10 md:pt-24 pb-6 overflow-hidden the-footer`}>
      <div className="absolute top-0 left-0">
        <svg
          className="sin-waves"
          fill="none"
          height="15"
          preserveAspectRatio="none"
          viewBox="0 0 2640 15"
          width="2640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.08252C8.66667 -0.91748 17.3333 -0.91748 26 7.08252C34.6667 15.0825 43.3333 15.0825 52 7.08252C60.6667 -0.91748 69.3333 -0.91748 78 7.08252C86.6667 15.0825 95.3333 15.0825 104 7.08252C112.667 -0.91748 121.333 -0.91748 130 7.08252C138.667 15.0825 147.333 15.0825 156 7.08252C164.667 -0.91748 173.333 -0.91748 182 7.08252C190.667 15.0825 199.333 15.0825 208 7.08252C216.667 -0.91748 225.333 -0.91748 234 7.08252C242.667 15.0825 251.333 15.0825 260 7.08252C268.667 -0.91748 277.333 -0.91748 286 7.08252C294.667 15.0825 303.333 15.0825 312 7.08252C320.667 -0.91748 329.333 -0.91748 338 7.08252C346.667 15.0825 355.333 15.0825 364 7.08252C372.667 -0.91748 381.333 -0.91748 390 7.08252C398.667 15.0825 407.333 15.0825 416 7.08252C424.667 -0.91748 433.333 -0.91748 442 7.08252C450.667 15.0825 459.333 15.0825 468 7.08252C476.667 -0.91748 485.333 -0.91748 494 7.08252C502.667 15.0825 511.333 15.0825 520 7.08252C528.667 -0.91748 537.333 -0.91748 546 7.08252C554.667 15.0825 563.333 15.0825 572 7.08252C580.667 -0.91748 589.333 -0.91748 598 7.08252C606.667 15.0825 615.333 15.0825 624 7.08252C632.667 -0.91748 641.333 -0.91748 650 7.08252C658.667 15.0825 667.333 15.0825 676 7.08252C684.667 -0.91748 693.333 -0.91748 702 7.08252C710.667 15.0825 719.333 15.0825 728 7.08252C736.667 -0.91748 745.333 -0.91748 754 7.08252C762.667 15.0825 771.333 15.0825 780 7.08252C788.667 -0.91748 797.333 -0.91748 806 7.08252C814.667 15.0825 823.333 15.0825 832 7.08252C840.667 -0.91748 849.333 -0.91748 858 7.08252C866.667 15.0825 875.333 15.0825 884 7.08252C892.667 -0.91748 901.333 -0.91748 910 7.08252C918.667 15.0825 927.333 15.0825 936 7.08252C944.667 -0.91748 953.333 -0.91748 962 7.08252C970.667 15.0825 979.333 15.0825 988 7.08252C996.667 -0.91748 1005.33 -0.91748 1014 7.08252C1022.67 15.0825 1031.33 15.0825 1040 7.08252C1048.67 -0.91748 1057.33 -0.91748 1066 7.08252C1074.67 15.0825 1083.33 15.0825 1092 7.08252C1100.67 -0.91748 1109.33 -0.91748 1118 7.08252C1126.67 15.0825 1135.33 15.0825 1144 7.08252C1152.67 -0.91748 1161.33 -0.91748 1170 7.08252C1178.67 15.0825 1187.33 15.0825 1196 7.08252C1204.67 -0.91748 1213.33 -0.91748 1222 7.08252C1230.67 15.0825 1239.33 15.0825 1248 7.08252C1256.67 -0.91748 1265.33 -0.91748 1274 7.08252C1282.67 15.0825 1291.33 15.0825 1300 7.08252C1308.67 -0.91748 1317.33 -0.91748 1326 7.08252C1334.67 15.0825 1343.33 15.0825 1352 7.08252C1360.67 -0.91748 1369.33 -0.91748 1378 7.08252C1386.67 15.0825 1395.33 15.0825 1404 7.08252C1412.67 -0.91748 1421.33 -0.91748 1430 7.08252C1438.67 15.0825 1447.33 15.0825 1456 7.08252C1464.67 -0.91748 1473.33 -0.91748 1482 7.08252C1490.67 15.0825 1499.33 15.0825 1508 7.08252C1516.67 -0.91748 1525.33 -0.91748 1534 7.08252C1542.67 15.0825 1551.33 15.0825 1560 7.08252C1568.67 -0.91748 1577.33 -0.91748 1586 7.08252C1594.67 15.0825 1603.33 15.0825 1612 7.08252C1620.67 -0.91748 1629.33 -0.91748 1638 7.08252C1646.67 15.0825 1655.33 15.0825 1664 7.08252C1672.67 -0.91748 1681.33 -0.91748 1690 7.08252C1698.67 15.0825 1707.33 15.0825 1716 7.08252C1724.67 -0.91748 1733.33 -0.91748 1742 7.08252C1750.67 15.0825 1759.33 15.0825 1768 7.08252C1776.67 -0.91748 1785.33 -0.91748 1794 7.08252C1802.67 15.0825 1811.33 15.0825 1820 7.08252C1828.67 -0.91748 1837.33 -0.91748 1846 7.08252C1854.67 15.0825 1863.33 15.0825 1872 7.08252C1880.67 -0.91748 1889.33 -0.91748 1898 7.08252C1906.67 15.0825 1915.33 15.0825 1924 7.08252C1932.67 -0.91748 1941.33 -0.91748 1950 7.08252C1958.67 15.0825 1967.33 15.0825 1976 7.08252C1984.67 -0.91748 1993.33 -0.91748 2002 7.08252C2010.67 15.0825 2019.33 15.0825 2028 7.08252C2036.67 -0.91748 2045.33 -0.91748 2054 7.08252C2062.67 15.0825 2071.33 15.0825 2080 7.08252C2088.67 -0.91748 2097.33 -0.91748 2106 7.08252C2114.67 15.0825 2123.33 15.0825 2132 7.08252C2140.67 -0.91748 2149.33 -0.91748 2158 7.08252C2166.67 15.0825 2175.33 15.0825 2184 7.08252C2192.67 -0.91748 2201.33 -0.91748 2210 7.08252C2218.67 15.0825 2227.33 15.0825 2236 7.08252C2244.67 -0.91748 2253.33 -0.91748 2262 7.08252C2270.67 15.0825 2279.33 15.0825 2288 7.08252C2296.67 -0.91748 2305.33 -0.91748 2314 7.08252C2322.67 15.0825 2331.33 15.0825 2340 7.08252C2348.67 -0.91748 2357.33 -0.91748 2366 7.08252C2374.67 15.0825 2383.33 15.0825 2392 7.08252C2400.67 -0.91748 2409.33 -0.91748 2418 7.08252C2426.67 15.0825 2435.33 15.0825 2444 7.08252C2452.67 -0.91748 2461.33 -0.91748 2470 7.08252C2478.67 15.0825 2487.33 15.0825 2496 7.08252C2504.67 -0.91748 2513.33 -0.91748 2522 7.08252C2530.67 15.0825 2539.33 15.0825 2548 7.08252C2556.67 -0.91748 2565.33 -0.91748 2574 7.08252C2582.67 15.0825 2591.33 15.0825 2600 7.08252C2608.67 -0.91748 2617.33 -0.91748 2626 7.08252C2634.67 15.0825 2643.33 15.0825 2652 7.08252C2660.67 -0.91748 2669.33 -0.91748 2678 7.08252C2686.67 15.0825 2695.33 15.0825 2704 7.08252C2712.67 -0.91748 2721.33 -0.91748 2730 7.08252C2738.67 15.0825 2747.33 15.0825 2756 7.08252C2764.67 -0.91748 2773.33 -0.91748 2782 7.08252C2790.67 15.0825 2799.33 15.0825 2808 7.08252C2816.67 -0.91748 2825.33 -0.91748 2834 7.08252C2842.67 15.0825 2851.33 15.0825 2860 7.08252C2868.67 -0.91748 2877.33 -0.91748 2886 7.08252C2894.67 15.0825 2903.33 15.0825 2912 7.08252C2920.67 -0.91748 2929.33 -0.91748 2938 7.08252C2946.67 15.0825 2955.33 15.0825 2964 7.08252C2972.67 -0.91748 2981.33 -0.91748 2990 7.08252C2998.67 15.0825 3007.33 15.0825 3016 7.08252C3024.67 -0.91748 3033.33 -0.91748 3042 7.08252C3050.67 15.0825 3059.33 15.0825 3068 7.08252C3076.67 -0.91748 3085.33 -0.91748 3094 7.08252C3102.67 15.0825 3111.33 15.0825 3120 7.08252C3128.67 -0.91748 3137.33 -0.91748 3146 7.08252C3154.67 15.0825 3163.33 15.0825 3172 7.08252C3180.67 -0.91748 3189.33 -0.91748 3198 7.08252C3206.67 15.0825 3215.33 15.0825 3224 7.08252C3232.67 -0.91748 3241.33 -0.91748 3250 7.08252C3258.67 15.0825 3267.33 15.0825 3276 7.08252C3284.67 -0.91748 3293.33 -0.91748 3302 7.08252C3310.67 15.0825 3319.33 15.0825 3328 7.08252C3336.67 -0.91748 3345.33 -0.91748 3354 7.08252C3362.67 15.0825 3371.33 15.0825 3380 7.08252C3388.67 -0.91748 3397.33 -0.91748 3406 7.08252C3414.67 15.0825 3423.33 15.0825 3432 7.08252C3440.67 -0.91748 3449.33 -0.91748 3458 7.08252C3466.67 15.0825 3475.33 15.0825 3484 7.08252C3492.67 -0.91748 3501.33 -0.91748 3510 7.08252C3518.67 15.0825 3527.33 15.0825 3536 7.08252C3544.67 -0.91748 3553.33 -0.91748 3562 7.08252C3570.67 15.0825 3579.33 15.0825 3588 7.08252C3596.67 -0.91748 3605.33 -0.91748 3614 7.08252C3622.67 15.0825 3631.33 15.0825 3640 7.08252C3648.67 -0.91748 3657.33 -0.91748 3666 7.08252C3674.67 15.0825 3683.33 15.0825 3692 7.08252C3700.67 -0.91748 3709.33 -0.91748 3718 7.08252C3726.67 15.0825 3735.33 15.0825 3744 7.08252C3752.67 -0.91748 3761.33 -0.91748 3770 7.08252C3778.67 15.0825 3787.33 15.0825 3796 7.08252C3804.67 -0.91748 3813.33 -0.91748 3822 7.08252C3830.67 15.0825 3839.33 15.0825 3848 7.08252C3856.67 -0.91748 3865.33 -0.91748 3874 7.08252C3882.67 15.0825 3891.33 15.0825 3900 7.08252C3908.67 -0.91748 3917.33 -0.91748 3926 7.08252C3934.67 15.0825 3943.33 15.0825 3952 7.08252C3960.67 -0.91748 3969.33 -0.91748 3978 7.08252C3986.67 15.0825 3995.33 15.0825 4004 7.08252C4012.67 -0.91748 4021.33 -0.91748 4030 7.08252C4038.67 15.0825 4047.33 15.0825 4056 7.08252C4064.67 -0.91748 4073.33 -0.91748 4082 7.08252C4090.67 15.0825 4099.33 15.0825 4108 7.08252C4116.67 -0.91748 4125.33 -0.91748 4134 7.08252C4142.67 15.0825 4151.33 15.0825 4160 7.08252C4168.67 -0.91748 4177.33 -0.91748 4186 7.08252C4194.67 15.0825 4203.33 15.0825 4212 7.08252C4220.67 -0.91748 4229.33 -0.91748 4238 7.08252C4246.67 15.0825 4255.33 15.0825 4264 7.08252C4272.67 -0.91748 4281.33 -0.91748 4290 7.08252C4298.67 15.0825 4307.33 15.0825 4316 7.08252C4324.67 -0.91748 4333.33 -0.91748 4342 7.08252C4350.67 15.0825 4359.33 15.0825 4368 7.08252C4376.67 -0.91748 4385.33 -0.91748 4394 7.08252C4402.67 15.0825 4411.33 15.0825 4420 7.08252C4428.67 -0.91748 4437.33 -0.91748 4446 7.08252C4454.67 15.0825 4463.33 15.0825 4472 7.08252C4480.67 -0.91748 4489.33 -0.91748 4498 7.08252C4506.67 15.0825 4515.33 15.0825 4524 7.08252C4532.67 -0.91748 4541.33 -0.91748 4550 7.08252C4558.67 15.0825 4567.33 15.0825 4576 7.08252C4584.67 -0.91748 4593.33 -0.91748 4602 7.08252C4610.67 15.0825 4619.33 15.0825 4628 7.08252C4636.67 -0.91748 4645.33 -0.91748 4654 7.08252C4662.67 15.0825 4671.33 15.0825 4680 7.08252C4688.67 -0.91748 4697.33 -0.91748 4706 7.08252C4714.67 15.0825 4723.33 15.0825 4732 7.08252C4740.67 -0.91748 4749.33 -0.91748 4758 7.08252C4766.67 15.0825 4775.33 15.0825 4784 7.08252C4792.67 -0.91748 4801.33 -0.91748 4810 7.08252C4818.67 15.0825 4827.33 15.0825 4836 7.08252C4844.67 -0.91748 4853.33 -0.91748 4862 7.08252C4870.67 15.0825 4879.33 15.0825 4888 7.08252C4896.67 -0.91748 4905.33 -0.91748 4914 7.08252C4922.67 15.0825 4931.33 15.0825 4940 7.08252C4948.67 -0.91748 4957.33 -0.91748 4966 7.08252C4974.67 15.0825 4983.33 15.0825 4992 7.08252C5000.67 -0.91748 5009.33 -0.91748 5018 7.08252C5026.67 15.0825 5035.33 15.0825 5044 7.08252C5052.67 -0.91748 5061.33 -0.91748 5070 7.08252C5078.67 15.0825 5087.33 15.0825 5096 7.08252C5104.67 -0.91748 5113.33 -0.91748 5122 7.08252C5130.67 15.0825 5139.33 15.0825 5148 7.08252C5156.67 -0.91748 5165.33 -0.91748 5174 7.08252C5182.67 15.0825 5191.33 15.0825 5200 7.08252"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col space-y-6">
            <Image
              src={iconLogo}
              className=""
              alt="FlowBite Logo"
              width={85}
              height={40}
            />
            <section className="flex space-x-4">
              <Link
                href="https://www.facebook.com/ThinkProDBCN.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Image
                  src={iconFacebook}
                  alt="Icon Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.youtube.com/c/ThinkProVN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Image
                  src={iconYoutube}
                  alt="Icon Youtube"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.youtube.com/c/ThinkProVN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Image
                  src={iconTiktok}
                  alt="Icon Youtube"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.youtube.com/c/ThinkProVN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Image
                  src={iconTelegram}
                  alt="Icon Youtube"
                  width={24}
                  height={24}
                />
              </Link>
            </section>
          </div>
          <section className="md:w-[315px] flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-bold font-lexend">Hotline</span>
              <Link
                href="#"
                rel="noopener noreferrer"
                className="t-button-tel flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-cyan-600"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.04 12.04 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"
                  />
                </svg>
                <span className="text-sm font-medium">1900.63.3579</span>
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-bold font-lexend">
                Cửa hàng Hà Nội
              </span>
              <span className="t-button-tel flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-cyan-600"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
                  />
                </svg>
                <span className="text-sm font-medium">
                  53 Thái Hà, Trung Liệt, Đống Đa
                  <Link
                    href="https://maps.app.goo.gl/SAX5CSoUqKbKMAS57"
                    className="text-sm text-blue-500"
                  >
                    (Chỉ đường)
                  </Link>
                </span>
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-bold font-lexend">
                Cửa hàng Hà Nội
              </span>
              <span className="t-button-tel flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-cyan-600"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
                  />
                </svg>
                <span className="text-sm font-medium">
                  5 - 7 Nguyễn Huy Tưởng, P.6, Q.Bình Thạnh
                  <Link
                    href="https://maps.app.goo.gl/SAX5CSoUqKbKMAS57"
                    className="text-sm text-blue-500"
                  >
                    (Chỉ đường)
                  </Link>
                </span>
              </span>
              <span className="t-button-tel flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-cyan-600"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015q.062.07.128.136a3 3 0 0 0 3.622.478m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75"
                  />
                </svg>
                <span className="text-sm font-medium">
                  95 Trần Thiện Chánh, P.12, Q.10
                  <Link
                    href="https://maps.app.goo.gl/SAX5CSoUqKbKMAS57"
                    className="text-sm text-blue-500"
                  >
                    (Chỉ đường)
                  </Link>
                </span>
              </span>
            </div>
          </section>
          <section className="flex flex-col space-y-2 md:w-[315px]">
            <span className="text-lg font-bold">Thông tin hữu ích</span>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Chính sách bảo hành
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Chính sách đổi trả
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Chính sách vận chuyển
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Chính sách thanh toán
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Chính sách kiểm hàng
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Hướng dẫn mua hàng online
            </Link>
            <Link
              href="https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro"
              className="text-sm hover:underline"
              rel="nofollow"
            >
              Về chúng tôi
            </Link>
          </section>
          <section className="md:w-[315px] flex flex-col">
            <span className="text-lg font-bold font-lexend">
              Phản hồi, góp ý
            </span>
            <span className="text-sm text-gray-600">
              Đội ngũ Kiểm Soát Chất Lượng của chúng tôi sẵn sàng lắng nghe quý
              khách.
            </span>
            <Link
              href="#"
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white bg-colorPray900 hover:bg-colorPray800 disabled:colorPray900 aria-disabled:colorPray900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault w-full flex justify-center items-center mt-4 btn-listen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>Gửi phản hồi</span>
            </Link>
          </section>
        </div>
        <hr className="mt-6 md:mt-12 mb-5 md:mb-6" />
        <div className="flex flex-col">
          <span className="text-xs">© TechPro 2024</span>
          <span className="text-xs">
            Công ty TNHH Công nghệ Think Việt Nam - GPĐKKD: 0107273909 do sở KH
            & ĐT TP Hà Nội cấp ngày 09/03/2020
          </span>
          <span className="text-xs">
            Địa chỉ: 105/562 Đường Láng, Phường Láng Hạ, Quận Đống Đa, Hà Nội.
            Điện thoại: 1900633579
          </span>
          <div className="flex items-center space-x-2 mt-5 md:mt-6">
            <Link
              href="#"
              rel="noopener nofollow"
              target="_blank"
              title="DMCA.com Protection Status"
            >
              <Image
                src={dmcaProtected}
                alt="DMCA.com Protection Status"
                loading="lazy"
                width={120}
                height={24}
              />
            </Link>
            <Link
              href="#"
              rel="noopener nofollow"
              target="_blank"
              title="DMCA.com Protection Status"
            >
              <Image
                src={boCongThuong}
                alt="Đã đăng ký với bộ công thương"
                loading="lazy"
                width={133}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
