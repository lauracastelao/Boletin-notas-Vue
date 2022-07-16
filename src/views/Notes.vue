<script></script>

<template>
<div class="container">
  <h2>Dropdown Example</h2>
  <p>The data-toggle="dropdown" attribute is used to open the dropdown menu.</p>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>    

    </ul>

  </div>
  <table> 
  <tr> 
    <td> Primero </td>
    <td> Segundo </td>
    <td> Tercero </td>
  </tr>
</table>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://th.bing.com/th/id/R.61317a129aaeb20a137420063b922253?rik=411LUA9QMU7M0w&pid=ImgRaw&r=0" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</template>

<style lang="css" scoped>
</style>