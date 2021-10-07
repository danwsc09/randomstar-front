import './index.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="container">
        <div className="contact">관리자 연락</div>
        <div className="copyright">
          Copyright 2021 RandomStarcraft.com &copy; All rights Reserved. Since
          2021-09-06
        </div>
        <div className="icon-source" style={{ display: 'none' }}>
          Icons made by{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
