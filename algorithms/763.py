class Solution(object):
    def partitionLabels(self, s):
        # 각 알파벳의 마지막 인덱스를 딕셔너리에 '알파벳: 인덱스'로 기록
        last = {}
        for i in range(len(s)):
            last[s[i]] = i
        
        most = 0 # 알파벳 마지막 인덱스
        res = [] # 정답 기록 배열
        c = 0 # 각 파티션의 길이 기록 변수 
        for i in range(len(s)):
            c = c + 1
            if last[s[i]] > most:
                most = last[s[i]]
            if last[s[i]] == most and i == most:
                res.append(c)
                most = 0
                c = 0
        return res
            

