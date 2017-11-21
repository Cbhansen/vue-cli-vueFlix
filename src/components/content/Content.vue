<template>
    <div id="content-container">
       <div class="title">
           <h1>Silent Hill: Revelation</h1>
           <h2>1hr 30mins | Horror, Suspense, Drama | 26 October 2012 </h2>
           <p>When her adoptive father dissapears, Sharon Da Silva is drawn into a strange
               and terifying alternative reality that holds answers to the horrific nightmares that
               have plagsued her since her childhood.
           </p>
           <div class="buttons">
               <button class="play">Play <i class="fa fa-play" aria-hidden="true"></i></button>
               <button class="addFavorites">Add to favorite <i class="fa fa-plus-circle" aria-hidden="true"></i></button>
           </div>
       </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#content-container {
  clear: both;
  width: 100%;
  height: 250px;
}
.title {
  margin-left: 50px;
}
.title h1 {
  color: #fff;
  font-size: 45px;
  position: absolute;
  top: 190px;
}
.title h2 {
  font-size: 15px;
  color: red;
  position: absolute;
  top: 260px;
}
.title p {
  color: #fff;
  position: absolute;
  top: 290px;
  max-width: 760px;
}
.buttons {
  position: absolute;
  top: 350px;
}
button {
  border: none;
  outline: none;
  padding: 1em;
  border-radius: 10px;
  transition: 0.5s all;
}
button:hover {
  cursor: pointer;
}
.play {
  width: 80px;
  background: red;
  color: #fff;
}
.play:hover {
  color: #000;
}
.addFavorites {
  background: none;
  color: #ccc;
  font-size: 1em;
}
.addFavorites:hover {
  color: #fff;
}
</style>

