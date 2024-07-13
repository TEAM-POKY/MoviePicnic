package www.project.domain;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserVO {
    private String email;
    private String nickname;
    private String pw;
    private String profile;
    private String role;
    private String isDel;
    private List<AuthVO> authList;//권한 목록
}
