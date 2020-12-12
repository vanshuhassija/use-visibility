import { useVisibility } from "../../use-visibility";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */

export default function Index() {
  const [isFirstVisible, firstRef] = useVisibility(-100);
  const [isSecondVisible, secondRef] = useVisibility(100);

  return (
    <main>
      <style jsx global>{`
        .App {
          font-family: sans-serif;
          text-align: center;
        }
        .text-danger{
          color:red;
        }

        .App > * {
          height: 100vh;
        }
      `}</style>

      <div className="App">
        <h1>useVisibility hook example</h1>

        <div ref={firstRef} className={`${!isFirstVisible&&"text-danger"}`}>
          <div>
            Event isFirstVisible will be true after scrolling up by 100 px
          </div>
          <div />
          {isFirstVisible || "In"}Visible
        </div>

        <div ref={secondRef} className={`${!isSecondVisible&&"text-danger"}`}>
          <div>
            Event isSecondVisible will be true if there will be 100 px below the
            viewport
          </div>
          <div>{isSecondVisible || "In"}Visible</div>
        </div>
      </div>
    </main>
  );
}
