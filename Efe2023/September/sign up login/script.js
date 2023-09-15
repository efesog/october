document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Kullanıcı adı ve şifreyi burada kontrol edebilirsiniz.
    // Örnek olarak:
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "kullanici" && password === "sifre") {
        alert("Giriş Başarılı!");
        // Giriş başarılı ise yönlendirme veya başka bir işlem yapılabilir.
    } else {
        alert("Giriş Başarısız. Lütfen bilgilerinizi kontrol edin.");
    }
});
