"use client";
import Image from "next/image";
import Spacer from "./components/spacer";
import { useState, useRef, useEffect } from "react";
import Card from "./components/card";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const cardContainerRef = useRef(null);

  return (
    <>
      <section className="left">
        <h1>태인's</h1>
        <h1>수시 트래커</h1>
        <Spacer y={20} />
      </section>

      <section className="right" id="main-section">
        <div className="card-container">
          {/*
          @status
          0: 발표 전
          1: 1차합격
          2: 최초합격
          3: 불합격
          4: 예비
          */}

          <Card
            name={'중앙대학교'}
            logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_of_Chung-Ang_University.svg/1088px-Logo_of_Chung-Ang_University.svg.png'}
            status={0}
            finalDate={new Date('2023-12-08')}
            link={'https://admission.cau.ac.kr/submenu.do?menuurl=cRn%2FaEwx6apTQh9HEMyZTw%3D%3D&categoryid=56'}
          />

          <Card
            name={'경희대학교'}
            logo={'https://blog.kakaocdn.net/dn/xNPVc/btrN6mORbXE/qNASwIsa1TepxHWWtAzCl0/img.png'}
            status={3}
            primaryDate={new Date('2023-11-22')}
            interviewDate={new Date('2023-12-03')}
            finalDate={new Date('2023-12-15')}
            link={'https://iphak.khu.ac.kr/main.do'}
          />

          <Card
            name={'건국대학교'}
            logo={'https://xemi.co.kr/wp-content/uploads/2017/02/%EA%B1%B4%EA%B5%AD%EB%8C%80logo.png'}
            status={3}
            primaryDate={new Date('2023-11-17')}
            interviewDate={new Date('2023-12-02')}
            finalDate={new Date('2023-12-15')}
            link={'https://enterdev.konkuk.ac.kr/main.do'}
          />

          <Card
            name={'동국대학교'}
            logo={'https://d1qzykz9iz00c7.cloudfront.net/static/logo_new/logo_c081.png'}
            status={3}
            primaryDate={new Date('2023-11-14')}
            interviewDate={new Date('2023-12-09')}
            finalDate={new Date('2023-12-15')}
            link={'https://ipsi.dongguk.edu/admission/html/main/main.asp'}
          />

          <Card
            name={'숭실대학교'}
            logo={'https://jwiki.kr/wiki/images/d/d5/%EC%88%AD%EC%8B%A4%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png'}
            status={0}
            primaryDate={new Date('2023-11-28')}
            interviewDate={new Date('2023-12-01')}
            finalDate={new Date('2023-12-15')}
            link={'https://iphak.ssu.ac.kr/'}
          />

          <Card
            name={'광운대학교'}
            logo={'https://i.namu.wiki/i/i7OL9-2wk8NeFQmUxJks2YiBmvQnPMtmTgIG4IrnDHkClyVLv5-xZ1-sJUNWvkv1e_mSBXpZi8QJqqsJtUOIKQ.svg'}
            status={2}
            primaryDate={new Date('2023-11-1')}
            interviewDate={new Date('2023-11-4')}
            finalDate={new Date('2023-11-10')}
            link={'https://iphak.kw.ac.kr'}
          />

        </div>
        <Spacer y={20} />

      </section >
    </>
  )
}
