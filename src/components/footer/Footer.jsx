import './footerStyle.css';
const Footer = () => {
    return (
        <footer className=''>
        <hr />
        <div className='mong'>
          <div className='bong'>
            <div className='bl7 text-light'>
              <p className='fs-5'>GET IN TOUCH</p>
              <p className=''>megz@gmail.com</p>
              <p className=''>011-4333-6842</p>
            </div>
            <div className='bl7 m-auto '>
              <button type='button' className='btn btn-outline-light ms-5'>
                CONTACT ME
              </button>
            </div>
            <div className='bl7 my-auto'>
              <div className='social-containet ms-5  d-flex flex-row-reverse'>
                    <span className='icon d-flex justify-content-center m-3 align-items-center rounded-circle'>
                    <a href='#'>
                        <i className='fab fa-facebook-f' />
                    </a>
                    </span>
                    <span className='icon d-flex justify-content-center m-3 align-items-center rounded-circle'>
                    <a href='#'>
                        <i className='fab fa-instagram' />
                    </a>
                    </span>
                    <span className='icon d-flex justify-content-center m-3 align-items-center rounded-circle'>
                    <a href='#'>
                        <i className='fab fa-youtube' />
                    </a>
                    </span>
                    <span className='icon d-flex justify-content-center m-3 align-items-center rounded-circle'>
                    <a href='#'>
                        <i className='fab fa-twitter' />
                    </a>
                    </span>
              </div>
              <p className='text-center  text-light d-flex flex-row-reverse'>
                <span>     Megzat</span>
                © all rights reserved by 
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer