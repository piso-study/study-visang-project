# Github 연습과 토이 프로젝트 준비

## 깃 전략

1. 메인 원격 저장소의 최신 버전을 다운로드합니다.

```bash
git pull [메인 원격 저장소의 이름] main
```

2. 개발하고자 하는 기능에 관련된 브랜치를 생성합니다.

```bash
# 현재 브랜치가 main인지 확인 후
git branch [개발하고자 하는 기능에 부합한 브랜치명]
```

3. 생성한 브랜치로 옮긴 후

```bash
git switch [생성한 브랜치명]
```

4. 해당 브랜치에서 개발을 진행

5. fork한 본인의 저장소에 push한다.

```bash
git add [...저장한 파일들]
git commit [적절한 커밋들]
git push [fork한 본인의 저장소 이름] [생성한 브랜치명]
```

6. pull request를 github 페이지에서 날린다.

7. pull request가 Close 즉 컨펌이 되면 로컬의 브랜치와 원격 저장소의 브랜치를 삭제한다.

```bash
git branch -d [개발하고자 하는 기능에 부합한 브랜치명]
git push --delete [fork한 본인의 저장소 이름] [생성한 브랜치명]
```

8. 1~7를 반복한다.