/**
 * 고정적으로 사용될 문자열
 */
const STRING = {
    // 게임 시작 안내 문구
    START : "숫자 야구 게임을 시작합니다.",
    
    // 게임 클리어 안내 문구
    CLEAR : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    
    // 게임 클리어 시 재시작 여부를 묻는 문구
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    
    // 게임 진행중 플레이어의 입력을 받는 문구
    INPUT: "숫자를 입력해주세요 : ",
    
    /**
     *  게임 진행중 숫자 판별을 위한 문구들
    */
    BALL: "볼",
    STRIKE: "스트라이크",
    NOTHING: "낫싱",
}

/**
 * 랜덤 숫자 범위
 */
const RANDOM_NUMBER_MIN = 1;
const RANDOM_NUMBER_MAX = 9;

/*
*   게임을 클리어 하기 위한 strike 조건
*/
const STRIKE_GAME_CLEAR = 3;

/**
 * 게임 재시작 및 종료를 위한 사용자 입력 값
 */
const RESTART_NUMBER = 1;
const END_NUMBER = 2;

export{
    STRING,
    RANDOM_NUMBER_MIN,
    RANDOM_NUMBER_MAX,
    STRIKE_GAME_CLEAR,
    RESTART_NUMBER,
    END_NUMBER,
}