<template>
  <div class="wrap">
    <div class="container">
      <section>
        <div class="box wrap1">
          <ul>
            <router-link
              class="questionLink"
              :to="{ name: 'PropisiuCestovnomPrometuPitanja' }"
              ><li>Propisi u cestovnom prometu</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'CestaiNjenaObiljezjaPitanja' }"
              ><li>Cesta i njena obilježja</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'PonasanjeSudionikauPrometuPitanja' }"
              ><li>Ponašanje sudionika u prometu</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'ZnakoviuPrometuPitanja' }"
              ><li>Znakovi u prometu</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'OstaliSudioniciuCestovnomPrometuPitanja' }"
              ><li>Ostali sudionici u cestovnom prometu</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'UocavanjePrometnihUvjetaiSituacijaPitanja' }"
              ><li>Uočavanje prometnih uvjeta i situacija</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'PrometnaPravilaPitanja' }"
              ><li>Prometna pravila</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'VozilouFunkcijiSigurnostiPrometaPitanja' }"
              ><li>Vozilo u funkciji sigurnosti prometa</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'VoznjauNaseljuPitanja' }"
              ><li>Vožnja u naselju</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'VoznjaIzvanNaseljaPitanja' }"
              ><li>Vožnja izvan naselja</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'PostupakuSlucajuPrometneNesrecePitanja' }"
              ><li>Postupak u slučaju prometne nesreće</li></router-link
            >
            <router-link
              class="questionLink"
              :to="{ name: 'VoznjauPosebnimUvjetimaPitanja' }"
              ><li>Vožnja u posebnim uvjetima</li></router-link
            >
          </ul>
        </div>
        <h2 class="headerOne">
          Prometni <br />
          Propisi i <br />Sigurnosna <br />
          Pravila
        </h2>
      </section>
      <section>
        <div class="box2 wrap2">
          <ul>
            <router-link class="questionLink" :to="{ name: 'PrvaPomocPitanja' }"
              ><li>Prva pomoć</li></router-link
            >
          </ul>
        </div>
        <h2 class="headerOne2">
          Prva <br />
          Pomoć
        </h2>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrap {
  width: 85vw;
  height: 100vh;
  background-color: red;
}

.container {
  width: 100%;
  height: 100%;
  background-color: green;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

section:nth-of-type(1) {
  background-color: rgb(28, 28, 28);
}
section:nth-of-type(2) {
  background-color: rgb(38, 38, 38);
  color: brown;
}
section:nth-of-type(3) {
  background-color: rgb(48, 48, 48);
  color: aqua;
}
section:nth-of-type(4) {
  background-color: rgb(58, 58, 58);
  color: blue;
}

.wrap1 {
  position: absolute;
  top: 25%;
  left: 55%;
  width: 750px;
  z-index: 0;
}

.questionLink {
  text-decoration: none;
}

.box {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.box ul {
  background: rgba(88, 86, 86, 0.561);
}

.box ul li {
  list-style: none;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  transition: transform 0.5s;
  color: #009879;
  font-weight: 400;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}
.box ul:hover li {
  opacity: 0.2;
}
.box ul li:hover {
  transform: scale(1.1);
  z-index: 100;
  background: #009879;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  color: #ffffff;
  border-radius: 30px;
  opacity: 1;
}

.box ul li:hover span {
  background: #ffffff;
  color: #009879;
}

.headerOne {
  font-size: 150px;
  position: absolute;
  top: 15%;
  left: 5%;
  font-weight: 900;
  color: #009879;
}

.wrap2 {
  position: absolute;
  top: 135%;
  left: 8%;
  width: 750px;
  z-index: 0;
}

.questionLink {
  text-decoration: none;
}

.box2 {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.box2 ul {
  background: rgba(88, 86, 86, 0.561);
}

.box2 ul li {
  list-style: none;
  padding: 10px;
  width: 100%;
  transition: transform 0.5s;
  color: #29ea07;
  font-size: 20px;
  font-weight: 400;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}
.box2 ul:hover li {
  opacity: 0.2;
}
.box2 ul li:hover {
  transform: scale(1.1);
  z-index: 100;
  background: #29ea07;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  color: #ffffff;
  border-radius: 30px;
  opacity: 1;
}

.box2 ul li:hover span {
  background: #ffffff;
  color: #29ea07;
}

.headerOne2 {
  font-size: 180px;
  position: absolute;
  top: 130%;
  left: 63%;
  font-weight: 900;
  color: #29ea07;
}
</style>
