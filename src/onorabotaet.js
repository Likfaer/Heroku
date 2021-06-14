import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./style.css";

export default function () {
  return <Layout />;
}

function Layout() {
  return <Header />;
}
function Header() {
  function loggedIn() {
    if (window.localStorage.getItem("isLogged") === "true") {
      return true;
    } else return false;
  }
  function logOut() {
    window.localStorage.setItem("isLogged", "false");
    window.location.reload();
  }
  return (
    <Router>
      <div class="row">
        <li class="col md-1">
          <Link to="/">Главная</Link>
        </li>
        <li class="col md-1">
          <Link to="/sign-in">Войти</Link>
        </li>
        <li class="col md-1">
          <Link to="/profile">Моя страница</Link>
        </li>
        <li class="col md-1">
          {loggedIn() ? (
            <button style={{}} onClick={() => logOut()}>
              Выход
            </button>
          ) : null}
        </li>
      </div>

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}
function MainPage() {
  return (
    <div class="row">
      <div class="col-md-8 blog-main">
        <h3 class="pb-3 mb-4 font-italic border-bottom"> </h3>
        <div class="blog-post">
          <h2 class="blog-post-title">
            Текст-заполнитель для первого сайта&nbsp;
          </h2>
          <p class="blog-post-meta">Февраль 14, 2021 by Diemon</p>
          <p>
            Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
            tortor aliquam. Non quam lacus suspendisse faucibus. Lectus urna
            duis convallis convallis. At augue eget arcu dictum varius duis at.
            Semper viverra nam libero justo. Libero justo laoreet sit amet. Ut
            diam quam nulla porttitor. Semper risus in hendrerit gravida rutrum
            quisque non tellus orci.{" "}
          </p>

          <p>
            Diam ut venenatis tellus in metus vulputate. Tortor dignissim
            convallis aenean et tortor at. Tristique senectus et netus et
            malesuada fames ac turpis. Mauris vitae ultricies leo integer. A
            diam sollicitudin tempor id eu nisl nunc mi.{" "}
          </p>
          <blockquote>
            <p>
              Sed tempus urna et pharetra pharetra massa massa ultricies.
              Fringilla ut morbi tincidunt augue interdum velit euismod in.
              Nulla facilisi morbi tempus iaculis urna id volutpat. In mollis
              nunc sed id semper risus in. Risus ultricies tristique nulla
              aliquet. Sapien nec sagittis aliquam malesuada bibendum arcu
              vitae. Amet porttitor eget dolor morbi.
            </p>
            <p>
              Sed tempus urna et pharetra pharetra massa massa ultricies.
              Fringilla ut morbi tincidunt augue interdum velit euismod in.
              Nulla facilisi morbi tempus iaculis urna id volutpat. In mollis
              nunc sed id semper risus in. Risus ultricies tristique nulla
              aliquet. Sapien nec sagittis aliquam malesuada bibendum arcu
              vitae. Amet porttitor eget dolor morbi. ПАСТА1
            </p>
            <p>
              Sed tempus urna et pharetra pharetra massa massa ultricies.
              Fringilla ut morbi tincidunt augue interdum velit euismod in.
              Nulla facilisi morbi tempus iaculis urna id volutpat. In mollis
              nunc sed id semper risus in. Risus ultricies tristique nulla
              aliquet. Sapien nec sagittis aliquam malesuada bibendum arcu
              vitae. Amet porttitor eget dolor morbi. ПАСТА2
            </p>
            <p>
              Sed tempus urna et pharetra pharetra massa massa ultricies.
              Fringilla ut morbi tincidunt augue interdum velit euismod in.
              Nulla facilisi morbi tempus iaculis urna id volutpat. In mollis
              nunc sed id semper risus in. Risus ultricies tristique nulla
              aliquet. Sapien nec sagittis aliquam malesuada bibendum arcu
              vitae. Amet porttitor eget dolor morbi. ПАСТА3
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function SignInPage() {
  function store() {
    var name = document.getElementById("name");
    var pw = document.getElementById("pw");

    window.localStorage.setItem("name", name.value);
    window.localStorage.setItem("password", pw.value);
    window.localStorage.setItem("isLogged", "false");
    alert(name.value + " , ты успешно зарегистрирован");
  }

  function check() {
    var storedName = window.localStorage.getItem("name");
    var storedPw = window.localStorage.getItem("password");

    var userName = document.getElementById("userName").value;
    var userPw = document.getElementById("userPw").value;
    if (window.localStorage.getItem("isLogged") === "true") {
      alert("Вы уже вошли");
    } else if (userName === storedName && userPw === storedPw) {
      window.localStorage.setItem("isLogged", "true");
      alert("Вы вошли");
    } else {
      alert("Чёта неправильно написал");
    }
  }
  return (
    <div class="card bg-light">
      <div class="card-body mx-auto">
        <h3 class="d-flex justify-content-center" center>
          Регистрация:
        </h3>
        <form class="form-group input-group">
          <input
            class="form-control"
            id="name"
            type="text"
            placeholder="Login"
          />{" "}
        </form>
        <form class="form-group input-group">
          <input
            class="form-control"
            id="pw"
            type="password"
            placeholder="Password"
          />
        </form>
        <input
          class="btn btn-primary btn-block"
          id="rgstr_btn"
          type="submit"
          value="Зарегистрироваться"
          onClick={() => store()}
        />
        <h3 class="d-flex justify-content-center">Логин:</h3>
        <form class="form-group input-group" id="login-form">
          <input
            class="form-control"
            id="userName"
            type="text"
            placeholder="Login"
          />
        </form>
        <input
          class="form-control"
          id="userPw"
          type="password"
          placeholder="Password"
        />
        <input
          class="btn btn-primary btn-block"
          id="login_btn"
          type="submit"
          value="Войти"
          onClick={() => check()}
        />
      </div>
    </div>
  );
}

function ProfilePage() {
  function loggedIn() {
    if (window.localStorage.getItem("isLogged") === "true") {
      return false;
    } else return true;
  }

  return (
    <div>
      {loggedIn() ? <Redirect to="/" /> : null}
      <hr></hr>
      <hr></hr>
      <h3>Логин: {window.localStorage.getItem("name")}</h3>
      <hr></hr>
      <hr></hr>
      <h3>Пароль: {window.localStorage.getItem("password")}</h3>
      <hr></hr>
      <hr></hr>
    </div>
  );
}
