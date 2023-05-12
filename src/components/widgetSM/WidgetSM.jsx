import "./widgetSM.css";
import { Visibility } from "@material-ui/icons";
const WidgetSM = () => {
  return (
    <div className="widgetSM">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Railer Mahsin</span>
            <span className="widgetSmUserTitle">Graphics Designer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="visiableIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Railer Mahsin</span>
            <span className="widgetSmUserTitle">Graphics Designer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="visiableIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/1073083/pexels-photo-1073083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Railer Mahsin</span>
            <span className="widgetSmUserTitle">Graphics Designer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="visiableIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSM;
