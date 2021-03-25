function login(){
    var username = document.getElementById('txtusername').value; 
    var password = document.getElementById('txtpass').value;
    if(username == "admin" && password == "admin"){
        alert('Đăng nhập thành công');
        window.location.replace("/VIPLogin/VIPLogin/dashboard.php");
    }else{
        alert('Đăng nhập thất bại, vui lòng thử lại');
        
    }
}