import "./App.css"
import logo from "./assets/images/logo.png"
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  return (
    <>
      <CssBaseline />
      <div className="container">
        <div className="site-noise is-playing"></div>
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="rosat logo"/>
          </div>
          <div className="menuItems">
            <div className="menuItem">
              <p>
                公司介绍
              </p>
            </div>
            <div className="menuItem">
              <p>
                公司作品        
              </p>
            </div>
            <div className="menuItem">
              <p>
                旗下艺人
              </p>
            </div>
            <div className="menuItem">
              <p>
                新闻中心
              </p>
            </div>
            <div className="menuItem">
              <p>
                合作机构
              </p>
            </div>
            <div className="menuItem">
              <p>
                联系我们
              </p>
            </div>
          </div>
          <div className="menuFooter">
            <div className="social">
              <img src="" alt="" srcSet=""/>
              <img src="" alt="" srcSet=""/>
              <img src="" alt="" srcSet=""/>
            </div>
            <div className="copyright">
              <p> © 2020 Rosa All Rights Reserved</p>
            </div>
          </div>
        </div>

        <div className="cont">
          <canvas id="background"></canvas>
          <div className="txt">
            <p className="p1">
              荣信达（上海）文化发展有限公司
            </p>
            <p className="p2">
              文化IP综合运营、影视投资制作<br/>
              艺人经纪以及娱乐营销<br/>
              IP衍生系经营为一体的综合性文化机构
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
