
function register(){

    const admin_Fee = 50.00;    
    const ticket_Price = 250.00;
    let total_Num = Number(sub_Total + admin_Fee);
    let qty_Num = document.getElementById("quanNum").value;
    let sub_Total = Number(qty_Num * ticket_Price)

    document.getElementById("final_Total").value=valArea.toFixed(2);
}