import type React from 'react';
import './SocialLinks.css';
import './Header.css'

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <h4>产品列表:</h4>
      <ul>
        <li>
          <p> -  <a href="https://movie.qianniu.city" target="_blank" rel="noopener noreferrer">
            骆驼电影侦探社（已开源）
          </a> </p>
        </li>
        <li>
          <p> -  <a href="https://llm.qianniu.city" target="_blank" rel="noopener noreferrer">
            LLM 入门课程 30 课
          </a> </p>
        </li>
        <li>
          <p> -  <a href="https://ollama.qianniu.city" target="_blank" rel="noopener noreferrer">
            Ollama 中文文档
          </a> </p>
        </li>
        <li>
          <p> -  <a href="https://blog.qianniu.city" target="_blank" rel="noopener noreferrer">
            牵牛博客
          </a> </p>
        </li>
        <br />
        <li>
          <p>更多产品，尽情期待。。。</p>
        </li>


      </ul>
      <h4>在这里找我: </h4>
      <ul>
        <li>
          <p> -  <a href="https://mp.weixin.qq.com/s/23DmkNrw0Imu8a44eg-xWg" target="_blank" rel="noopener noreferrer">
            微信公众号：二师兄talks
          </a> </p>
        </li>
        <li>
          <p> -  <a href="https://github.com/qianniucity" target="_blank" rel="noopener noreferrer">
            GitHub：qianniucity
          </a>  </p>
        </li>
        <li>
          <p> -  <a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAA8QATErPBiyyzhq6qUDxybp50pGtcWTK2fhP6Ei2ABYM61UX3JKqnk2GkJ1LRQURa/?" target="_blank" rel="noopener noreferrer">
            头条号：二师兄 talks
          </a>  </p>
        </li>
        <li>
          <p> -  <a href="https://www.zhihu.com/people/dev-daddy" target="_blank" rel="noopener noreferrer">
            知乎号：二师兄 talk
          </a>  </p>
        </li>
        <li>
          <p> -  <a href="https://space.bilibili.com/12494395?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer">
            Bilibili：二师兄 talk
          </a>  </p>
        </li>

      </ul>
      <h4>Contact:</h4>
      <p>WeChat: <a href="https://mmbiz.qpic.cn/sz_mmbiz_png/nPgXa3Zicnj8YLkn6j5HURqcTXgPvz8G9D5Ipnia3kOlLD1fKsKqyibvZn8LqWiclunHfhzdyvXRL7g0cMewvCYnTg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" target="_blank" rel="noopener noreferrer">二师兄</a></p>
      <p>Email: <a href="mailto:king101125s@gmail.com">king101125s@gmail.com</a></p>
      <p>Ph: <a href="tel:+8618123592515">+86 18123592515</a></p>
    </div>
  );
};

export default SocialLinks;