const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

console.log(teamMembers);

// Selezione il contenitore nell'HTML
const teamMembersField = document.getElementById("team-members");

// Ciclo per inserimento dati nel blocco
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  // Blocco di codice dell'HTML
  const markup = `
                      <div class="col">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${thisMember.img}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${thisMember.name}</h5>
                                        <p class="card-text">${thisMember.role}</p>
                                        <a href="#">${email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                `;
}
