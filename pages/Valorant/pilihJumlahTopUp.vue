<template>
  <div class="container mt-5 pt-5 mb-3">
    <h3 class="">Top Up Radiant Point</h3>

    <div class="border p-3 rounded">
      <div class="row">
        <div
          v-for="radiant in radiants"
          :key="radiant.id"
          class="col-lg-4 col-md-6 col-sm-12 mb-4"
        >
          <div class="card h-100">
            <img :src="radiant.gambar" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ radiant.JumlahTopUp }}</h5>
              <p class="card-text">{{ radiant.desc }}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-success">Top Up Gass</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/" class="btn btn-danger mt-5">Kembali Ke Halaman Awal</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radiants: [
        {
          id: "1",
          gambar: "valorant.jpeg",
          JumlahTopUp: "200 Radiant Point",
          desc: "Rp 10.000,-",
        },
        {
          id: "2",
          gambar: "valorant.jpeg",
          JumlahTopUp: "400 Radiant Point",
          desc: "Rp 20.000,-",
        },
        {
          id: "3",
          gambar: "valorant.jpeg",
          JumlahTopUp: "600 Radiant Point",
          desc: "Rp 40.000,-",
        },
        {
          id: "4",
          gambar: "valorant.jpeg",
          JumlahTopUp: "800 Radiant Point",
          desc: "Rp 70.000,-",
        },
        {
          id: "5",
          gambar: "valorant.jpeg",
          JumlahTopUp: "1.000 Radiant Point",
          desc: "Rp 90.000,-",
        },
        {
          id: "6",
          gambar: "valorant.jpeg",
          JumlahTopUp: "2.000 Radiant Point",
          desc: "Rp 200.000,-",
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
