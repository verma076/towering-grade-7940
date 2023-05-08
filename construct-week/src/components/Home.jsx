import "./home.css"
import Footer from "./Footer"



function Home(){
    return(
        <div>
          <div  className="home">
            <div>
                <h1>CODING ACADEMY</h1>
                <h3>Train a computer to recognize your own images, sounds, & poses.</h3>
                <p>A fast, easy way to create machine learning models for your sites, apps, and more – no expertise or coding required.</p>
                <button className="button" >Get Started</button>

            </div>
            <div className="pic" >
                <img 
                 className="pic" src="https://assets.codepen.io/177054/image+11+%281%29.png" alt="biub" />
            </div>
        </div>  
        <div className="coding">
          <h1>What is Coding<br/> Academy?</h1>
          
          <iframe width="684" height="385" src="https://www.youtube.com/embed/Ifvqddzz6iE" title="Coding Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="para">Coding Academy is a web-based tool<br/> that makes creating machine<br/> learning models fast, easy, and accessible to everyone. <br/>(Note: you can find the first version of Teachable Machine from 2017 here.)</p>
        </div>
        <div className="card">
            <div>
                <img src="https://assets.codepen.io/177054/image+12+%282%29.png" alt="" />
                <h1>Online Courses</h1>
                <p>Our intuitive course builder gives you the power to share what you know.<br/> No coding or design skills necessary.</p>
                <button>Learn More</button>
            </div>
            <div>
            <img src="https://assets.codepen.io/177054/image+11+%281%29.png" alt="" />
            <h1>Digital downloads</h1>
                <p>Reach your <br /> audience with the content they want, faster than ever. Sell PDFs,<br/> audio clips, and more.</p>
                <button>Learn More</button> 
            </div>
            <div>
            <img src="https://assets.codepen.io/177054/coaching_products.jpg" alt="" />
            <h1>Coaching products</h1>
                <p>Manage your coaching business with milestones and scheduling, plus, process payments all on Teachable.</p>
                <button>Learn More</button>
            </div>
        </div>
        <div className="main">
            <img src="https://assets.codepen.io/177054/image+14.png" alt="" />
        </div>
        <div className="box">
            <div>
                <img src="https://teachable.com/blog/wp-content/uploads/2021/04/Primary-14-1068x956.png" alt="" />
            </div>
            <div style={{background:"#1B4942"}}>
                <h1  >Your weekly dose <br/> of creative chat<br/> and Teachable updates. Get our weekly newsletter.</h1>
            </div>
        </div>
  <div>
    <h1 style={{textAlign:"center"}}>Top Categories</h1>
  </div>
    <div className="last1">
        <div>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/web-design-company-video-ad-template-d38b37ca796136ef41d11c1c00b87a1c_screen.jpg?ts=1626896102" alt="" />
            <h1>MY SQL</h1>
        </div>
        <div>
        <img src="https://th.bing.com/th/id/R.2376037b33410f30abce6a01ebebe432?rik=aqgKHpHaYLqxQA&riu=http%3a%2f%2fcdn.lynda.com%2fcourses%2f123492-637490922177306538_540x960_thumb.jpg&ehk=wQqrr318I%2b4g9zNeJUK3YWE0y%2fsTrSjsKls0onZK%2fO0%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <h1>ActionScript</h1>
        </div>
        <div>
        <img src="https://th.bing.com/th/id/OIP.a4QqBWGbYcOufT8rLt2f0QHaFW?w=233&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
            <h1>React js Learning</h1>
        </div>
        <div>
        <img src="https://th.bing.com/th/id/OIP.aMxh8Wc2uB4aXXuFWs_SCgHaFh?pid=ImgDet&rs=1" alt="" />
            <h1>HTML Learning</h1>
        </div>
    </div>


    <div className="last2">
    <div>
            <img src="https://th.bing.com/th/id/OIP.yoQwUlomxcQOAmYHSOfy8wHaD4?pid=ImgDet&rs=1" alt="" />
            <h1>Technical course</h1>
        </div>
        <div>
        <img src="https://th.bing.com/th/id/OIP.5-vMYdG8C7gpgqwJJV_xhgHaEK?pid=ImgDet&rs=1" alt="" />
            <h1>Phython Learning</h1>
        </div>
        <div>
        <img src="https://th.bing.com/th/id/OIP.Som-QkcHBZb41zAsDfPfVQHaFj?pid=ImgDet&rs=1" alt="" />
            <h1>Chakra</h1>
        </div>
        <div>
        <img src="https://i1.wp.com/articleusa.com/wp-content/uploads/2021/02/software_development-blog-banner.png?resize=1536%2C922&ssl=1" alt="" />
            <h1>Software</h1>
        </div>
    </div>

<Footer/>


    </div>
    )
}
export default Home