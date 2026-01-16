import styles from "../PhoneMockup/PhoneMockup.module.css"

type IPhoneMockupProps = {
  screen: string;
  alt?: string;
  scale?: number;
};

export default function IPhoneMockup({
  screen,
  alt = "App screenshot",
  scale = 1,
}: IPhoneMockupProps) {
  return (
    <div className={styles.wrapper} style={{ transform: `scale(${scale})` }}>
      {/* SCREEN IMAGE */}
      <img src={screen} alt={alt} className={styles.screen} />

      {/* FRAME OVERLAY */}
      <img
        src="src\components\ui\iphone-frame.png"
        aria-hidden
        className={styles.frame}
      />
    </div>
  );
}
