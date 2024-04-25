import React from 'react'

export default function Login() {
  return (
    <div>
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" alt="Attractive fashion model and fashion makeup Stock Photo 03 free download"/>
            </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form>
            <div data-mdb-input-init class="form-outline mb-4">
                <h2>Welcome Back</h2>
                <h5>Sign in to continue your progress</h5>
                <label class="form-label" for="form1Example13">Email address</label>
                <input type="email" id="form1Example13" class="form-control form-control-lg" />
            </div>

        
            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form1Example23">Password</label>
                <input type="password" id="form1Example23" class="form-control form-control-lg" />
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">
           
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
            </div>

            <buttons>Sign in</buttons><br/>
            {/* <button type="/Register" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block mb-5">Sign in</button><br/><br/> */}
            
            <h6>Don't have an account? <a href="/Register" >Register Here</a></h6>
          


        </form>
      </div>
    </div>
  </div>
</section>
</div>

  )
}

