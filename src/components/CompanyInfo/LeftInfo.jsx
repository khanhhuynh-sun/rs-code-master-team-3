import React from "react";
import "./LeftInfo.scss";

const LeftInfo = () => {
  return (
    <div className="LeftInfo">
      <div className="Info">
        <h2 className="Info__title">Our mission</h2>
        <p className="Info__description">
          Est rouge is coming from Japan brings Japanese marvellous web service
          onto Global market, especially South East Asian market.
        </p>
        <p className="Info__description">
          We are providing method to adjust your idea and service into new world
          from planning to growth with Global development team centered in Japan
          and Vietnam.
        </p>
      </div>

      <div className="Info">
        <h2 className="Info__title">Company profile</h2>
        <ul className="Info__list">
          <li className="Info__list-item">
            <h3 className="Info__list-title">Company Name</h3>
            <p className="Info__description">
              Est rouge inc. (株式会社エスト・ルージュ)
            </p>
          </li>
          <li className="Info__list-item">
            <h3 className="Info__list-title">TOKYO Head office</h3>
            <p className="Info__description">
              IINO building 9F, Uchisaiwaicho 2-1-1, Chiyoda-ku, Tokyo
            </p>
            <p className="Info__description">
              東京都千代田区内幸町2丁目1番1号飯野ビルディング9階
            </p>
          </li>
          <li className="Info__list-item">
            <h3 className="Info__list-title">Established</h3>
            <p className="Info__description">Nov, 2016</p>
          </li>
          <li className="Info__list-item">
            <h3 className="Info__list-title">Board member</h3>
            <p className="Info__description">CEO Akiyuki Nomura</p>
            <p className="Info__description">代表取締役 野村亮之</p>
          </li>
        </ul>
      </div>

      <div className="Info">
        <h2 className="Info__title">Related companies</h2>
        <ul className="Info__list">
          <li className="Info__list-item">
            <h3 className="Info__list-title">Est rouge Creative Japan</h3>
            <p className="Info__description">
              IINO building 9F, Uchisaiwaicho 2-1-1, Chiyoda-ku, Tokyo
            </p>
          </li>
          <li className="Info__list-item">
            <h3 className="Info__list-title">
              Est rouge Technologies, Vietnam
            </h3>
            <p className="Info__description">
              ZEN Diamond 4F 16 Ly Thuong Kiet, Hai Chau, Da Nang
            </p>
          </li>
          <li className="Info__list-item">
            <h3 className="Info__list-title">Est rouge United, Vietnam</h3>
            <p className="Info__description">
              ZEN Diamond 4F 16 Ly Thuong Kiet, Hai Chau, Da Nang
            </p>
          </li>
        </ul>
      </div>

      <div className="Info">
        <h2 className="Info__title">Service for people visiting Japan</h2>
        <p className="Info__description">
          What we call Inbound media business, internet services for people
          visiting Japan. Nowadays there is around 20,000,000 people visiting
          Japan in one year, this number grows much more recently. We are
          providing service supporting those people, be able to enjoy Experience
          in Japan much more.
        </p>
      </div>
    </div>
  );
};

export default LeftInfo;
