<template>
    <div id="footer-container">
        <div class="featured-movies">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer-container {
  height: 200px;
  max-width: 960px;
  width: 100%;
  background: linear-gradient(to right, #000, #333, #d33716);
  position: absolute;
  bottom: 65px;
}
.featured-movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.featured-movies > div {
  height: 150px;
  width: 200px;
  margin: 20px 10px;
  line-height: 75px;
  font-size: 30px;
}
.featured-movies > div:nth-child(1) {
  background: url("https://static.rogerebert.com/uploads/movie/movie_poster/the-shining-1980/large_zc5y5OwKSV9MDXpfWxwrOjyRHsq.jpg");
  background-size: cover;
  background-position: center;
}
.featured-movies > div:nth-child(2) {
  background: url("http://www.gstatic.com/tv/thumb/dvdboxart/35685/p35685_d_v8_aa.jpg");
  background-size: cover;
  background-position: center;
}
.featured-movies > div:nth-child(3) {
  background: url("http://www.gstatic.com/tv/thumb/movieposters/8890173/p8890173_p_v8_ah.jpg");
  background-size: cover;
  background-position: center;
}
.featured-movies > div:nth-child(4) {
  background: url("https://media1.popsugar-assets.com/files/thumbor/JP4A3P8cMnkEQhbIECQ7qjIEq5I/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/09/21/938/n/1922283/6e2644a359c42f87f1d427.01392572_edit_img_image_44057657_1506026104/i/Horror-Movies-2018.jpg");
  background-size: cover;
  background-position: center;
}
</style>

