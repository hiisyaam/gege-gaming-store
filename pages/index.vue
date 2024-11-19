<template>
  <div class="container mt-5 pt-5">
    <!-- GAMBAR YG GERAK TERUS -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="/gambar1.jpeg"></b-carousel-slide>
        <b-carousel-slide img-src="/gambar2.jpeg"></b-carousel-slide>
        <b-carousel-slide img-src="/pubg.jpeg"></b-carousel-slide>
      </b-carousel>
    </div>

    <br />
    <hr />
    <!-- BAGIAN TOP UP -->
    <h3 class="text-center mt-4 mb-5">Top Up Game</h3>
    <div class="row">
      <div
        v-for="game in games"
        :key="game.id"
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <div class="card h-100">
          <img :src="game.image" class="card-img-top" :alt="game.title" />
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <p class="card-text">{{ game.description }}</p>
          </div>
          <div class="card-footer">
            <NuxtLink :to="game.link" class="btn btn-primary w-100">
              Top Up Sekarang
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      games: [
        {
          id: 1,
          title: "Mobile Legends",
          description:
            "Top up sekarang dan dapatkan kill terbanyak sekarang juga",
          image: "ml.jpeg",
          link: "/MobileLegend/pilihJumlahTopUp",
        },
        {
          id: 2,
          title: "PUBG Mobile",
          description: "Top Up satu detik langsung booyahh. Kelaszz kinggg",
          image: "pubg.jpeg",
          link: "/PUBG/pilihJumlahTopUp",
        },
        {
          id: 3,
          title: "Valorant",
          description:
            "Top Up di sini, langsung dapatkan Radiant Point gacorrr",
          image: "/Valorant/valorant.jpeg",
          link: "/Valorant/pilihJumlahTopUp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.container {
  margin-top: 5rem;
}
</style>
