/* ===== PASSWORD SYSTEM ===== */
const passwords = ["151677", "653432", "856342"];
let passIndex = 0;

document.getElementById("openPassword").onclick = () => {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("passwordScreen").classList.remove("hidden");
};

document.getElementById("checkPassword").onclick = () => {
  const input = document.getElementById("passwordInput").value;

  if (input === passwords[passIndex]) {
    passIndex = (passIndex + 1) % passwords.length;

    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("chaptersScreen").classList.remove("hidden");
    document.getElementById("passError").innerText = "";
    document.getElementById("passwordInput").value = "";
  } else {
    document.getElementById("passError").innerText = "Password-ka waa qalad!";
  }
};

/* ===== CUTUB WALBA SAWIR GOONI AH ===== */
const chapters = {
  1: [
 "https://i.postimg.cc/ZYybBX03/page-001.png",
"https://i.postimg.cc/QxbRHqgS/page-002.png",
"https://i.postimg.cc/YCtLxtWS/page-003.png",
"https://i.postimg.cc/FRX4jHYV/page-004.png",
"https://i.postimg.cc/HnLPMq9F/page-005.png",
 "https://i.postimg.cc/Dwfdwr5q/page-006.png",
 "https://i.postimg.cc/cLKCh6Jy/page-007.png",
"https://i.postimg.cc/QdWN5P6H/page-008.png",
"https://i.postimg.cc/GmQRkCkg/page-009.png",
"https://i.postimg.cc/1Xx2kCGY/page-010.png",
"https://i.postimg.cc/prZCsqqD/page-011.png",
"https://i.postimg.cc/Y0qYCkzh/page-012.png",
"https://i.postimg.cc/85nPLSV1/page-013.png",
"https://i.postimg.cc/Gtw3XjHm/page-014.png",
"https://i.postimg.cc/MGqyFyfz/page-015.png",
"https://i.postimg.cc/jSXc6sMb/page-016.png",
"https://i.postimg.cc/J00C86tG/page-017.png",
"https://i.postimg.cc/DwVHpyQ2/page-018.png",
"https://i.postimg.cc/gc1GdpqY/page-019.png",
"https://i.postimg.cc/5t2hLKqg/page-020.png",
"https://i.postimg.cc/QMCzH9jD/page-021.png",
"https://i.postimg.cc/hP41DFSb/page-022.png",
"https://i.postimg.cc/qvbbVJyx/page-023.png",
"https://i.postimg.cc/pX46SXvT/page-024.png",
"https://i.postimg.cc/J0gPSK9Q/page-025.png",
  ],
2: [
 "https://i.postimg.cc/9fVJ3DNn/page-026.png",
"https://i.postimg.cc/28G4q0Hc/page-027.png",
"https://i.postimg.cc/fLQ3qd2R/page-028.png",
"https://i.postimg.cc/Sxwjj8h0/page-029.png",
"https://i.postimg.cc/yNyBBS6P/page-030.png",
"https://i.postimg.cc/hv9N8kJv/page-031.png",
"https://i.postimg.cc/L5wGjj3z/page-032.png",
"https://i.postimg.cc/sXvrSfRR/page-033.png",
"https://i.postimg.cc/T2b8X4d9/page-034.png",
"https://i.postimg.cc/m2cPRRcw/page-035.png",
"https://i.postimg.cc/zDhfP749/page-036.png",
"https://i.postimg.cc/QCfYq1gc/page-037.png",
"https://i.postimg.cc/x1zgXWZb/page-038.png",
"https://i.postimg.cc/8cxMDCTT/page-039.png",
"https://i.postimg.cc/1XVVWZwC/page-040.png",
"https://i.postimg.cc/Y9Zz2RxR/page-041.png",
"https://i.postimg.cc/28qgx9Jn/page-043.png",
"https://i.postimg.cc/JzK1f21Y/page-044.png",
"https://i.postimg.cc/rwZBCXyR/page-045.png",
"https://i.postimg.cc/d3nHsrL2/page-046.png",
"https://i.postimg.cc/yNzFGW82/page-047.png",
"https://i.postimg.cc/wTmRdHZK/page-048.png",
"https://i.postimg.cc/t4DxBk8d/page-049.png",
"https://i.postimg.cc/FFgsbRM0/page-050.png",
"https://i.postimg.cc/X7PM96Y0/page-051.png",
"https://i.postimg.cc/Kz5jY8Fk/page-052.png",
"https://i.postimg.cc/GtBW5XXS/page-053.png",
"https://i.postimg.cc/6p9X9fqH/page-054.png",
  ],
3: [
"https://i.postimg.cc/2Sjspj9X/page-055.png",
"https://i.postimg.cc/xTn7HTQC/page-056.png",
"https://i.postimg.cc/SQ71yF9k/page-057.png",
"https://i.postimg.cc/nVPj9MBj/page-058.png",
"https://i.postimg.cc/MHMGmbVy/page-059.png",
"https://i.postimg.cc/PxcXJp9v/page-060.png",
"https://i.postimg.cc/c47v9hPT/page-061.png",
"https://i.postimg.cc/FRcrfs4n/page-062.png",
"https://i.postimg.cc/3NYTdX9Y/page-063.png",
"https://i.postimg.cc/gcXt1Syk/page-064.png",
"https://i.postimg.cc/qMHwSkMY/page-065.png",
"https://i.postimg.cc/k4cMCMdr/page-066.png",
"https://i.postimg.cc/NjHgMkwR/page-067.png",
"https://i.postimg.cc/mZpRy5Ly/page-068.png",
"https://i.postimg.cc/qqSPVWqK/page-069.png",
"https://i.postimg.cc/QdWtRr45/page-070.png",
"https://i.postimg.cc/JnTMsTYG/page-071.png",
"https://i.postimg.cc/BQFf3Q3q/page-072.png",
"https://i.postimg.cc/VkYwFPy8/page-073.png",
"https://i.postimg.cc/vZW14sWk/page-074.png",
"https://i.postimg.cc/6QMpZ5TY/page-075.png",
"https://i.postimg.cc/Hsb5yXm3/page-076.png",
"https://i.postimg.cc/FR2dfsB4/page-077.png",
"https://i.postimg.cc/9QJDdBny/page-078.png",
"https://i.postimg.cc/qvMRv3vL/page-079.png",
"https://i.postimg.cc/ZY8KPc97/page-080.png",
"https://i.postimg.cc/KcDx38Vs/page-081.png",
"https://i.postimg.cc/fyz4fYFf/page-082.png",
"https://i.postimg.cc/CKkWyvpP/page-083.png",
"https://i.postimg.cc/dt3pQQKs/page-084.png",
"https://i.postimg.cc/Qxv4Xpb2/page-085.png",
"https://i.postimg.cc/k4hNTmh9/page-086.png",
"https://i.postimg.cc/CKhjY1Wv/page-087.png",
"https://i.postimg.cc/N0s6pfYK/page-088.png",
  ],
4: [
"https://i.postimg.cc/8PLLGrz1/page-089.png",
"https://i.postimg.cc/63DGJ9st/page-090.png",
"https://i.postimg.cc/7ZxJysRz/page-091.png",
"https://i.postimg.cc/d323brmx/page-092.png",
"https://i.postimg.cc/2516zP7S/page-093.png",
"https://i.postimg.cc/Yq8qQpXf/page-094.png",
"https://i.postimg.cc/wxQ6dqYQ/page-095.png",
"https://i.postimg.cc/KzryFNwT/page-096.png",
"https://i.postimg.cc/jdkYsCgm/page-097.png",
"https://i.postimg.cc/wvknnBRR/page-098.png",
"https://i.postimg.cc/85T0dVXP/page-099.png", 
  ],
5: [
"https://i.postimg.cc/gkxBHssB/page-100.png",
"https://i.postimg.cc/6qgcPsc1/page-101.png",
"https://i.postimg.cc/KYGWB2Hz/page-102.png",
"https://i.postimg.cc/W1WGYc4w/page-103.png",
"https://i.postimg.cc/13fntn95/page-104.png",
"https://i.postimg.cc/2jnXcGBq/page-105.png",
"https://i.postimg.cc/kMjtm38d/page-106.png",
"https://i.postimg.cc/6qTq3qRQ/page-107.png",
"https://i.postimg.cc/fLqW6sFz/page-108.png",
"https://i.postimg.cc/pTSxsZ97/page-109.png",
"https://i.postimg.cc/pTSxsZ97/page-109.png",
"https://i.postimg.cc/yY140trP/page-111.png",
"https://i.postimg.cc/B6TkKBTg/page-112.png",
"https://i.postimg.cc/HkrN2g0s/page-113.png",
"https://i.postimg.cc/rshh1nKH/page-114.png",
"https://i.postimg.cc/c1DT5zLb/page-115.png",
"https://i.postimg.cc/brMxYKGc/page-116.png",
  ],
6: [
 "https://i.postimg.cc/Jh3k0YNG/Whats-App-Image-2025-12-13-at-9-40-12-PM.jpg",
  ],

  7: [
  "https://i.postimg.cc/TwNmQZJL/page-117.png",
"https://i.postimg.cc/Njt4yvNV/page-118.png",
"https://i.postimg.cc/BZ1cMnRs/page-119.png",
"https://i.postimg.cc/L4fLj0Z4/page-120.png",
"https://i.postimg.cc/d3K7WwTt/page-121.png",
"https://i.postimg.cc/fWjkz49R/page-122.png",
"https://i.postimg.cc/9MPXQTzN/page-123.png",
"https://i.postimg.cc/26YmM62p/page-124.png",
"https://i.postimg.cc/XJnSxPY6/page-125.png",
"https://i.postimg.cc/WbByXy5J/page-126.png",
"https://i.postimg.cc/8cqZXFmG/page-127.png",
"https://i.postimg.cc/g0NNFtHg/page-128.png",
"https://i.postimg.cc/xdxhy1hc/page-129.png",
"https://i.postimg.cc/L5zx79CZ/page-130.png",
"https://i.postimg.cc/TY09WHZp/page-131.png",
"https://i.postimg.cc/sDTY2GhT/page-132.png",
"https://i.postimg.cc/kMc8jRww/page-133.png",
  ],
8: [
  "https://i.postimg.cc/3xDkHkC0/page-134.png",
"https://i.postimg.cc/nh8HB07P/page-135.png",
"https://i.postimg.cc/2jMmN2H2/page-136.png",
"https://i.postimg.cc/Ls52MwM1/page-137.png",
"https://i.postimg.cc/DzRk3zgN/page-138.png",
"https://i.postimg.cc/GtrfbTyd/page-139.png",
"https://i.postimg.cc/KjJ0Fqbt/page-140.png",
  ],
9: [
"https://i.postimg.cc/7649z8YK/page-141.png",
"https://i.postimg.cc/3wXCYSC8/page-142.png",
"https://i.postimg.cc/BvBDd843/page-143.png",
"https://i.postimg.cc/ZnS8W1Zf/page-144.png",
"https://i.postimg.cc/rFbpg50B/page-145.png",
"https://i.postimg.cc/1XX9rz9n/page-146.png",
"https://i.postimg.cc/rwXkKjtC/page-147.png",
"https://i.postimg.cc/5yYhtQ4k/page-148.png",
"https://i.postimg.cc/V6196xYQ/page-149.png",
"https://i.postimg.cc/FsfS9rjh/page-150.png",
"https://i.postimg.cc/4dddBPPm/page-151.png",
"https://i.postimg.cc/G3DBN7rc/page-152.png",
"https://i.postimg.cc/gjy207kT/page-153.png",
"https://i.postimg.cc/KYLSFMYr/page-154.png",
  ],
10: [
"https://i.postimg.cc/qMt19dqc/page-156.png",
"https://i.postimg.cc/wvTV2CnX/page-157.png",
"https://i.postimg.cc/BQ1Cmc7m/page-158.png",
"https://i.postimg.cc/F1t3M8Cp/page-159.png",
"https://i.postimg.cc/9QYgBYrh/page-160.png",
"https://i.postimg.cc/NG2Nnc51/page-161.png",
"https://i.postimg.cc/FsQxnkMT/page-162.png",
"https://i.postimg.cc/L5kjMNd8/page-163.png",
"https://i.postimg.cc/yxKSncDT/page-164.png",
"https://i.postimg.cc/k43VXKvd/page-165.png",
"https://i.postimg.cc/mrQLjqC0/page-166.png",
"https://i.postimg.cc/d0KvhBpS/page-167.png",
"https://i.postimg.cc/J4DWKvWK/page-168.png",
"https://i.postimg.cc/cJmqrNQS/page-169.png",
"https://i.postimg.cc/90Ds8Rsr/page-170.png",
"https://i.postimg.cc/7LqdvQpv/page-171.png",
"https://i.postimg.cc/L8S2XDrk/page-172.png",
"https://i.postimg.cc/66GXfFKV/page-173.png",
"https://i.postimg.cc/3xpNf9Gw/page-174.png",
"https://i.postimg.cc/PqTX3Hh8/page-175.png",
"https://i.postimg.cc/8zHcVcyG/page-176.png",
"https://i.postimg.cc/vZQ8XMGc/page-177.png",
"https://i.postimg.cc/vZDkGShb/page-178.png", 
  ]
};

/* ===== OPEN CHAPTER ===== */
function openChapter(num) {
  document.getElementById("chaptersScreen").classList.add("hidden");
  document.getElementById("readerScreen").classList.remove("hidden");

  document.getElementById("chapterTitle").innerText = "Cutubka " + num;

  const pagesArea = document.getElementById("pagesArea");
  pagesArea.innerHTML = "";

  if (chapters[num]) {
    chapters[num].forEach(link => {
      const img = document.createElement("img");
      img.src = link;
      img.className = "pageImg";
      pagesArea.appendChild(img);
    });
  }
}

/* ===== BACK BUTTON ===== */
function goBack() {
  document.getElementById("readerScreen").classList.add("hidden");
  document.getElementById("chaptersScreen").classList.remove("hidden");
}
