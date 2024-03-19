const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyApkOSbUGAge1oIloVv_dWJr33yJ7lY-vM",
  authDomain: "project-332064414218013760.firebaseapp.com",
  projectId: "project-332064414218013760",
  storageBucket: "project-332064414218013760.appspot.com",
  messagingSenderId: "339860525430",
  appId: "1:339860525430:web:80d340a2e1abd5c99d2a57",
  measurementId: "G-QWF2FYL6G0",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (!user) {
      throw new Error("User not created");
    }
    console.log(user);
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.render("error", { status: 404, message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (!user) {
      throw new Error("User not found");
    }
    res.redirect("/home");
  } catch (er) {
    console.log(er);
    res.render("error", { status: 404, message: er.message });
  }
};

module.exports = { login, signUp };
