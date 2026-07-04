function showOnboarding() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("onboardingPage").classList.remove("hidden");
}

function analyzeBusiness() {
  const businessData = {
    name: document.getElementById("bname").value,
    type: document.getElementById("btype").value,
    revenue: document.getElementById("revenue").value,
    employees: document.getElementById("employees").value,
    challenges: document.getElementById("challenges").value
  };

  localStorage.setItem("businessData", JSON.stringify(businessData));

  alert("🤖 AI Boardroom finished analysis!");

  // IMPORTANT: move to dashboard
  window.location.href = "dashboard.html";
}