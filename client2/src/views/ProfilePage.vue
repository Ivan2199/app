<template>
  <!DOCTYPE html>
  <div>
    <div class="wrapper">
      <div class="userBoxLeft">
        <img src="../assets/avatar.png" alt="user" width="100" />
        <h4>{{ name }} {{ surname }}</h4>
      </div>
      <div class="userBoxRight">
        <div class="userInformation">
          <h3>O Korisniku</h3>
          <div class="userInformation_data">
            <div class="data">
              <h4>Email</h4>
              <p>{{ email }}</p>
            </div>
            <div class="data">
              <h4>Spol</h4>
              <p>{{ gender }}</p>
            </div>
          </div>
        </div>

        <div class="userQuizzes">
          <h3>Riješeni Kvizovi</h3>
          <div class="userQuizzes_data">
            <table class="table">
              <thead>
                <tr>
                  <th>Kviz</th>
                  <th>Datum</th>
                  <th>Vrijeme<br />Početak - Kraj</th>
                  <th>Bodovi</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody
                class="dataQuizResult"
                v-for="quizResult in quizResults"
                :key="quizResult.id"
              >
                <tr v-if="quizResult.userId === userId">
                  <td>{{ quizResult.quizId }}.</td>
                  <td>{{ quizResult.startTime | formatDate }}</td>
                  <td>
                    {{ quizResult.startTime | formatTime }} -
                    {{ quizResult.endTime | formatTime }}
                  </td>
                  <td>{{ quizResult.score }}</td>
                  <td>
                    {{ quizResult.status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      quizResults: null,
      gender: '',
      userId: 0,
      error: false
    }
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    },
    formatTime(value) {
      if (value) {
        return moment(String(value)).format('hh:mm:ss')
      }
    }
  },
  mounted: function () {
    axios
      .get('http://localhost:8081/quiz-result/')
      .then((response) => (this.quizResults = response.data))
      .catch((error) => console.log(error))

    this.name = this.$store.state.user.name
    this.surname = this.$store.state.user.surname
    this.email = this.$store.state.user.email
    this.gender = this.$store.state.user.gender
    this.userId = this.$store.state.user.id
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.wrapper {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 70%;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
}

.wrapper .userBoxLeft {
  width: 35%;
  background: linear-gradient(45deg, #008587, #02babd, #03fbff);
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
}

.wrapper .userBoxLeft img {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 55px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 50%;
}

.wrapper .userBoxLeft h4 {
  font-size: 40px;
}

.wrapper .userBoxRight {
  width: 65%;
  background: #fff;
  padding: 30px 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.wrapper .userBoxRight .userInformation,
.wrapper .userBoxRight .userQuizzes {
  margin-bottom: 25px;
}

.wrapper .userBoxRight .userInformation h3,
.wrapper .userBoxRight .userQuizzes h3 {
  margin-bottom: 50px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  color: #353c4e;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.wrapper .userBoxRight .userInformation_data {
  display: flex;
  justify-content: space-between;
}

.wrapper .userBoxRight .userQuizzes_data {
  background: linear-gradient(45deg, #008587, #02babd, #03fbff);
  padding: 5px;
  overflow-y: scroll;
  max-height: 350px;
  margin-top: 70px;
  border: 5px solid #01a9ac70;
  padding: 10px;
}
::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
  border-collapse: collapse;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.wrapper .userBoxRight .userInformation_data .data,
.wrapper .userBoxRight .userQuizzes_data .data {
  width: 45%;
}

.wrapper .userBoxRight .userInformation_data .data h4 {
  color: #353c4e;
  margin-bottom: 5px;
}

.wrapper .userBoxRight .userInformation_data .data p {
  font-size: 16px;
  margin-bottom: 10px;
  color: #919aa3;
}
.wrapper .userBoxRight .userQuizzes_data tbody {
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #0a6c6e;
  background: white;
  font-weight: 600;
  border-radius: 15px;
}
.wrapper .userBoxRight .userInformation_data .dataQuizResult,
.wrapper .userBoxRight .userQuizzes_data .dataQuizResult {
  width: 100%;
}
</style>
