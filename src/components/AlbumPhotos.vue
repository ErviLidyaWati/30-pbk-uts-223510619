<template>
  <div>
    <div class="background"></div>
    <!-- background element -->
    <div class="container">
      <h1 class="header-title">Galeri Foto</h1>
      <div class="input-group">
        <label for="photoLimit">Jumlah Foto:</label>
        <input type="number" id="photoLimit" v-model.number="photoLimit" @change="fetchPhotos" />
      </div>

      <div class="album-container">
        <div v-for="photo in photos" :key="photo.id" class="photo-item">
          <img :src="photo.thumbnailUrl" :alt="photo.title" @click="openModal(photo.url)" />
          <p>{{ photo.title }}</p>
        </div>
      </div>
    </div>

    <!-- Modal untuk menampilkan gambar ukuran penuh -->
    <div class="modal" v-if="modalImageUrl">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="modalImageUrl" :alt="modalImageAlt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
      photoLimit: 5,
      modalImageUrl: '', // Untuk menyimpan URL gambar ukuran penuh
      modalImageAlt: '' // Untuk menyimpan teks alternatif gambar
    }
  },
  created() {
    this.fetchPhotos()
  },
  methods: {
    fetchPhotos() {
      let url = `https://jsonplaceholder.typicode.com/photos`
      if (this.photoLimit) {
        url += `?_limit=${this.photoLimit}`
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.photos = data.map((photo) => ({
            id: photo.id,
            thumbnailUrl: photo.thumbnailUrl,
            url: photo.url,
            title: photo.title
          }))
        })
        .catch((error) => {
          console.error('Error fetching photos:', error)
        })
    },
    openModal(fullImageUrl) {
      this.modalImageUrl = fullImageUrl
      // Di sini Anda bisa menambahkan logika untuk teks alternatif jika diperlukan
      this.modalImageAlt = '' // Sesuaikan dengan teks alternatif dari data jika ada
    },
    closeModal() {
      this.modalImageUrl = ''
    }
  }
}
</script>

<style scoped>
/* Styles untuk modal */
.modal {
  display: block;
  position: fixed;
  z-index: 3; /* Pastikan lebih tinggi dari z-index .container */
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal img {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 800px;
  max-height: 80%;
}

.close {
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.container {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-family: 'Roboto', sans-serif;
  position: relative;
  z-index: 2; /* Pastikan lebih tinggi dari z-index .background */
  backdrop-filter: blur(10px);
}

.header-title {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: aurora-text 5s ease-in-out infinite alternate;
}

.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

input[type='number'] {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #7fffd4;
  border-radius: 5px;
  margin-left: 10px;
  width: 100px;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
  color: #7fffd4;
}

input[type='number']:focus {
  border-color: #ffcc00;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.7);
}

label {
  font-size: 18px;
  color: #7fffd4;
}

.album-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.photo-item {
  background: linear-gradient(145deg, #1e3c72, #2a5298);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  width: 220px;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(127, 255, 212, 0.8);
}

.photo-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.photo-item p {
  padding: 12px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin: 0;
}

@keyframes aurora-text {
  0% {
    text-shadow:
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(194, 236, 241, 0.825);
  }
  100% {
    text-shadow:
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 0.8);
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation:
    moveBackground 10s linear infinite,
    colorShift 20s ease-in-out infinite;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

@keyframes colorShift {
  0% {
    background-color: #817f9a;
  }
  25% {
    background-color: #0b3d91;
  }
  50% {
    background-color: #3a3a52;
  }
  75% {
    background-color: #0b3d91;
  }
  100% {
    background-color: #bfbbfe;
  }
}
</style>
