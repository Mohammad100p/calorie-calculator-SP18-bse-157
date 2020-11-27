$(function(){
    $("#form-id").submit(function(){
        return false;
    });
    $("#carbtotal").html(sumColumn(2));
    $("#caltotal").html(sumColumn(3));

    $("#add").click(function(){
        var itm = document.getElementById("items");
        var option = itm.options[itm.selectedIndex];
        var carbbs = option.getAttribute("carbs");
        var cal = option.getAttribute("cal");
        var calfood = document.getElementById("calfood");
        calfood.innerHTML=
        calfood.innerHTML+ `<tr>
        <th scope="row">${option.text}</th>
        <td carbbsValue="${carbbs}">${carbbs}</td>
        <td calValue="${cal}">${cal}</td>
        <td><button class"btn btn-danger btn-sm" type"button" onclick='delitem(event)'>Delete</button></td>
        </tr>`;
        console.log(option.value);
        console.log(option.text);
        console.log(carbbs);
    });
    $("#calculate").click(calculate);
});

function delitem(e)
{
    var btn = e.target;
    var td = btn.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
    $("#carbtotal").html(sumColumn(0));
    $("#caltotal").html(sumColumn(0));
}

function calculate()
{
    $("#carbtotal").html(sumColumn(2));
    $("#caltotal").html(sumColumn(3));
}

function sumColumn(index) {
    var total = 0;
    $("td:nth-child(" + index + ")").each(function () {
      total += parseInt($(this).text(), 10) || 0;
    });
    return total;
  }