alert("Olá!")

function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#localidade").html(response.localidade)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#uf").html(response.uf)
            $("#ddd").html(response.ddd)
            $(".cep").show()
        }
    })
}

$(function(){
    $(".cep").hide()
})