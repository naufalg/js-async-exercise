// jshint esversion:10
// #### SOAL ####
// Buatlah fungsi fetch menggunakan
// promise sebuah data dengan endpoint
// “https://restcountries.eu/rest/v2/all”
// - Tampilkan seluruh bendera negara dan
// nama negaranya ke dalam dom
// - Responsif

// #### JAWABAN ####
class Nation {
  constructor(name, capital, callingCodes, flag) {
    this.name = name;
    this.capital = capital;
    this.callingCodes = callingCodes;
    this.flag = flag;
  }
}

// fetch
fetch("https://restcountries.eu/rest/v2/region/asia")
  .then((result) => {
    return result.json();
  })

  .then((result) => {
    // Indonesia
    const indonesia = new Nation(
      result[12].name,
      result[12].capital,
      result[12].callingCodes,
      result[12].flag
    );
    console.log(result[12].name); // Indonesia
    console.log(result[12].capital); // Jakarta
    console.log(result[12].callingCodes); // 62
    console.log(result[12].flag); //https://restcountries.eu/data/idn.svg
    console.log(indonesia);

    // Singapore
    const singapore = new Nation(
      result[36].name,
      result[36].capital,
      result[36].callingCodes,
      result[36].flag
    );
    console.log(result[36].name); // Singapore
    console.log(result[36].capital); // Singapore
    console.log(result[36].callingCodes); // 65
    console.log(result[36].flag); //https://restcountries.eu/data/sgp.svg
    console.log(singapore);

    // Malaysia
    const malaysia = new Nation(
      result[24].name,
      result[24].capital,
      result[24].callingCodes,
      result[24].flag
    );
    console.log(result[24].name); // Malaysia
    console.log(result[24].capital); // Kuala Lumpur
    console.log(result[24].callingCodes); // 60
    console.log(result[24].flag); //https://restcountries.eu/data/mys.svg
    console.log(malaysia);

    // Philippines
    const philippines = new Nation(
      result[33].name,
      result[33].capital,
      result[33].callingCodes,
      result[33].flag
    );
    console.log(result[33].name); // Philippines
    console.log(result[33].capital); // Manila
    console.log(result[33].callingCodes); // 63
    console.log(result[33].flag); //https://restcountries.eu/data/phl.svg
    console.log(philippines);

    // to array
    let nationArr = [indonesia, singapore, malaysia, philippines];
  });

// #### SOAL ####
// Buatlah fungsi fetch menggunakan async/await sebuah data dengan endpoint
// “https://api.github.com/users/<github_username>”
// - Buat tampilan semenarik mungkin dari data yang disediakan oleh github

// #### JAWABAN ####
async function getGithub(username) {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    console.log("data", data);
    console.log("name", data.name); // name Naufal Ghifari
    console.log("login", data.login); // login naufalg
    console.log("avatar_url", data.avatar_url); // avatar_url https://avatars0.githubusercontent.com/u/66429734?v=4
    console.log("html_url", data.html_url); // html_url https://github.com/naufalg
    console.log("location", data.location); // location Indonesia
    console.log("public_repos", data.public_repos); // public_repos 24
    console.log("followers", data.followers); // followers 11
  } catch {
    console.log("Error");
  }
}

getGithub("naufalg");
