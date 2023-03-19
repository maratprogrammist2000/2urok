function function_summa()
{
    let first_number = Number( document.getElementById("first_num").value);
    let second_number = Number( document.getElementById("second_num").value);
    let result = first_number+second_number;
    if (result > 10)
    alert("Большое число!!!"+result);
    else if (result==0)
    alert("Вы не вели числа!");
    else if ((first_number ==5) && (second_number ==5))
    alert("Раз ввел две пятерки,дай пятюню!");
    else if ((first_number ==9) && (second_number ==9))
    alert("Вы ввели одну девяточку!Теперь вас ждет удача!");
    else
    alert("Маленькое число :("+ result);
    document.getElementById('header-event').innerHTML = result;
};