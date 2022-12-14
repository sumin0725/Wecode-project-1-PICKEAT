import './Main.scss';
import { useState, useEffect, useRef } from 'react';
import BastLecture from './components/BastLecture/BastLecture';
import FreeLecture from './components/freeLecture/FreeLecture';
import SlideBox from './components/SlideBox/SlideBox';

const Main = () => {
  const [bastLectureList, setBastLectureList] = useState([]);
  const [freeLectureList, setFreeLectureList] = useState([]);
  const [slideImgList, setSlideImgList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [freeLectureIndex, setFreeLectureIndex] = useState(0);
  const [backColor, setBackColor] = useState('colorBoxColor1');
  const freeLectureRef = useRef(null);

  // const Contact = React.);

  const rightfreeLectureSlide = () => {
    if (freeLectureIndex === 2) {
      setFreeLectureIndex(0);
    } else {
      setFreeLectureIndex(value => value + 1);
    }
  };

  const leftfreeLectureSlide = () => {
    if (freeLectureIndex === 0) {
      setFreeLectureIndex(2);
    } else {
      setFreeLectureIndex(value => value - 1);
    }
  };

  useEffect(() => {
    freeLectureRef.current.style.transform = `translateX(-${
      freeLectureIndex * 1083
    }px)`;
  }, [freeLectureIndex]);

  useEffect(() => {
    fetch('data/slidedata.json')
      .then(respons => respons.json())
      .then(data => {
        setSlideImgList(data);
      });
  }, []);

  useEffect(() => {
    fetch('data/bastLecture.json')
      .then(response => response.json())
      .then(data => {
        setBastLectureList(data);
      });
  }, []);

  useEffect(() => {
    fetch('data/freeLecture.json')
      .then(response => response.json())
      .then(data => {
        setFreeLectureList(data);
      });
  }, []);

  return (
    <div className="mainBody">
      <SlideBox
        slideImgList={slideImgList}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        backColor={backColor}
        setBackColor={setBackColor}
      />

      <div className="mainHome">
        <p className="popularity">
          <i className="fa-solid fa-egg" />
          P!CKEAT
          <span className="popularityText">
            ?????? ?????? ???????????? ????????????{' '}
            <span className="topNumber">TOP5! ????</span>
          </span>
        </p>
        <div className="bastLecture">
          {bastLectureList.map(lecture => (
            <BastLecture key={lecture.id} lecture={lecture} />
          ))}
        </div>

        <p className="popularity">
          <span className="popularityText">
            ????????? ????????? ???????????? ????????????! ????
            <i className="fa-solid fa-fork" />
          </span>
        </p>
        <div className="freeLectureBody">
          <i
            className="fa-solid fa-chevron-left fa-3x"
            onClick={leftfreeLectureSlide}
          />
          <div className="freeLecture">
            <ul className="lecturesSlide" ref={freeLectureRef}>
              {freeLectureList.map(lecture => (
                <FreeLecture key={lecture.id} lecture={lecture} />
              ))}
            </ul>
          </div>
          <i
            className="fa-solid fa-chevron-right fa-3x"
            onClick={rightfreeLectureSlide}
          />
        </div>
      </div>
      <div className="mainUnder" id="mainAbout">
        <div className="mainUnderText">
          <p className="mainUnderP">??????????????? ?????? ?????????</p>
          <p className="mainUnderP">
            ?????? ??? ??????{' '}
            <span className="logo">
              <i className="fa-solid fa-egg" />
              P!CKEAT
            </span>
          </p>
          <p className="mainUnderNetxP">
            ?????? ????????? 0 ???! 5 ?????? ????????????, 20?????? ??????????????? ???????????????
            ????????? ?????? ????????? ???????????????.
          </p>
        </div>
        <img className="mainUnderImg" src="https://ifh.cc/g/MJylHH.jpg" />
      </div>
      <div className="mainUnderBar">
        <div className="underBars">
          <p className="underBarsNumber">01</p>
          <p className="underBarsText1">5????????? ???????????????</p>
          <p className="underBarsText2">
            ????????? ???????????? ????????? ?????????????????????
          </p>
          <p className="underBarsText3">40?????? ????????? ???????????? ?????????</p>
          <p className="underBarsText4">???????????? ????????????!</p>
        </div>
        <div className="underBars">
          <p className="underBarsNumber">02</p>
          <p className="underBarsText1">????????? ???????????? ??????</p>
          <p className="underBarsText2">????????? ??? ???, ???????????? ??????????</p>
          <p className="underBarsText3">???????????? ?????? ???????????????</p>
          <p className="underBarsText4">???????????? ??????????????????!</p>
        </div>
        <div className="underBars">
          <p className="underBarsNumber">03</p>
          <p className="underBarsText1">??????????????? ?????????</p>
          <p className="underBarsText2">?????? ????????? 100???! ????????? ????????????</p>
          <p className="underBarsText4">??????????????? ???????????? ???????????????.</p>
        </div>
      </div>
      <div className="mainCoupon">
        <p>
          ??????{' '}
          <span>
            <i className="fa-solid fa-egg" />
            P!CKEAT
          </span>{' '}
          ????????????
          <br />
          ???????????? ?????? ????????????!
        </p>
        <i className="fa-solid fa-ticket fa-5x" />
      </div>
      <div className="mainCouponImg">
        <img src="https://ifh.cc/g/c0SHjh.jpg" />
      </div>
    </div>
  );
};

export default Main;
