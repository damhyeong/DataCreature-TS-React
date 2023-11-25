export default interface ExampleListItemInterface {
    title : string;
    level : number;
    favoriteCount : number;
    viewCount : number;
    writeDatetime : string;
    writeNickname : string;
    // DDL 상에서 NOT NULL 이 아닌, NULL 이라면 string | null 이런 식으로 표기해 주어야 한다.
}

/*
private int exampleNumber; // 문제 ID
    private String title; // 문제 제목
    private int level; //
    private int favoriteCount;
    private int viewCount;
    private String writeDatetime;
    private String writeNickname;
 */