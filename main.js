function register(){

    const admin_Fee = 50.00;    
    const ticket_Price = 250.00;
    let qty_Num = document.getElementById("quanNum").value;
    let sub_Total = qty_Num * ticket_Price;
    let total_Num = sub_Total + admin_Fee;

    document.getElementById("final_subtotal").value=sub_Total.toFixed(2);
    document.getElementById("final_Total").value=total_Num.toFixed(2);
}
