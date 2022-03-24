$(document).ready(function () {
  //identificar elementos html
  const heroId = $("#heroId");
  const button = $("#button");

  //identificar elementos html del hero
  const heroContainer = $("#heroContainer");
  const heroImg = $("#heroImg");
  const heroNombre = $("#nombre");

  const conexiones = $("#conexiones");
  const publicado = $("#publicado");
  const ocupacion = $("#ocupacion");
  const aparicion = $("#aparicion");
  const altura = $("#altura");
  const peso = $("#peso");
  const alianzas = $("#alianzas");

  // eventos
  button.on("click", function (event) {
    identificador = heroId.val();
    $.ajax({
      type: "GET",
      url: `https://www.superheroapi.com/api.php/4905856019427443/${identificador}`,
      dataType: "json",
      success: function (data) {
        heroContainer.addClass("cargado");
        heroImg.attr("src", data.image.url);
        heroNombre.html(data.name);
        conexiones.html(
          `Conexiones: ${data.connections["group-affiliation"]} `
        );
        publicado.html(`Publicado por: ${data.biography.publisher}`);
        ocupacion.html(`Ocupacion: ${data.work.occupation}`);
        aparicion.html(
          `Primera aparicion: ${data.biography["first-appearance"]}`
        );

        altura.html(`Altura: ${data.appearance.height[1]}`);
        peso.html(`Peso: ${data.appearance.weight[1]}`);
        alianzas.html(`Alianza: ${data.connections.relatives}`);
      },
    });
  });
});
