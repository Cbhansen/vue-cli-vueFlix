<template>
    <div id="header-container">
        <nav>
            <ul>
                <li class="bars"><i class="fa fa-bars" aria-hidden="true"></i></li>
                <li>Home</li>
                <li class="active">Movies</li>
                <li>Shows</li>
                <li><input type="text" id="input" placeholder="Enter title"> <i id="search" class="fa fa-search" aria-hidden="true"></i></li>
                <li class="logo">VueFlix</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header-container {
  width: 100%;
  background: black;
}
nav {
  position: absolute;
  max-width: 960px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
  height: 65px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  font-size: 18px;
  float: left;
  margin: 25px;
  color: #ccc;
  padding: 0.2em;
  border-radius: 15px;
}
li:hover {
  cursor: pointer;
}
.active {
  color: #000;
  background: #fff;
  font-weight: bold;
}
.logo {
  float: right;
  color: red;
  font-weight: bold;
  font-size: 20px;
}
.bars {
  font-size: 20px;
  color: red;
}
#input {
  border: 0;
  border-radius: 20px;
  width: 150px;
  outline: none;
  font-size: 15px;
}
input::placeholder {
  text-align: center;
}
#search {
  color: red;
}
</style>

