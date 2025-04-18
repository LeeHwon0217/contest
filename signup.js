function signup() {
  const id = document.getElementById("signup-id").value;
  const pw = document.getElementById("signup-password").value;
  const pwConfirm = document.getElementById("signup-password-confirm").value;
  const phone = document.getElementById("signup-phone").value;
  const email = document.getElementById("signup-email").value;
  const companyNum = document.getElementById("signup-company-num").value;
  const companyName = document.getElementById("signup-company-name").value;

  if (pw !== pwConfirm) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  alert(`회원가입 정보: 아이디=${id}, 이메일=${email}, 회사명=${companyName}`);
}
