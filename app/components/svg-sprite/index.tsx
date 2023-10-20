export default function SvgSprite() {
  return (
    <div className="svg-sprite">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 -960 960 960" id="chevron-right">
          <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
        </symbol>
        <symbol viewBox="0 -960 960 960" id="chevron-left">
          <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
        </symbol>
        <symbol viewBox="0 -960 960 960" id="chevron-down">
          <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
        </symbol>
        <symbol viewBox="0 -960 960 960" id="arrow-left">
          <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
        </symbol>
        <symbol viewBox="0 -960 960 960" id="menu">
          <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
        </symbol>
        <symbol viewBox="0 -960 960 960" id="close">
          <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </symbol>
      </svg>
    </div>
  );
}
