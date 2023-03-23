import './footer.css'

export default function Footer() {
  return (
    <footer className="bg-footer text-center text-lg-start fixed-bottom">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">À propos</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Contact</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Plan du site</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Qui sommes nous</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Conditions générale de vente</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Conditions</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-dark">Mentions légales</a>
            </li>
            <li>
              <a href="#!" className="text-dark">CGV</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Gestion de cookies</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 info col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
          <ul className='list-unstyled'>
            <li>INFOS ET RESERVATIONS</li>
            <li>+33 1 43 25 63 97</li>
            <li>Lundi au vendredi : 09:00-12:45 | 14:00-18:00</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center p-3">
      © 2023 Copyright : PAWNBALLS
    </div>
  </footer>
  )
}
