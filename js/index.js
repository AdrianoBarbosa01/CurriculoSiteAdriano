const firebaseConfig = {
    apiKey: "AIzaSyD1WaGcKmqUA4-tT80qjxMxXIQB8l1nXnY",
    authDomain: "logincurriculosite.firebaseapp.com",
    databaseURL: "https://logincurriculosite-default-rtdb.firebaseio.com",
    projectId: "logincurriculosite",
    storageBucket: "logincurriculosite.appspot.com",
    messagingSenderId: "78554101134",
    appId: "1:78554101134:web:a6f7526bdd0b05597760df",
    measurementId: "G-9D4XTB6YLZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function cadastrar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("Seus dados foram cadastrado com sucesso!");
            auth = user;
            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
            window.location.href = "../html/login.html";
        }).catch(function (error) {
            alert("Falha ao cadastrar!");
        });
}
