// hashmap version
class Solution {
        public int numSplits(String s) {

            HashMap<Character, Integer> left = new HashMap<>();
            HashMap<Character, Integer> right = new ashMap<>();

            for ( int i = 0 ; i < s.length() ; i++ ) {
                char c = s.charAt(i);
                right.put(c, right.getOrDefault(c, 0) + 1);
            }

            int count = 0;

            for ( int i = 0 ; i < s.length() ; i++ ) {
                char curr = s.charAt(i);

                left.put(curr, left.getOrDefault(curr, 0) + 1);
                right.put(curr, right.getOrDefault(curr, 0) - 1);

                if (right.get(curr) <= 0) right.remove(curr);
                if (left.size() == right.size()) count += 1;
            }

            return count;
        }
    }

// faster solution : two-point
class Solution {
	public int numSplits(String s) {
		int rc[] = new int[26], lc[] = new int[26], l = 0, r = 0, res = 0;
		for ( char c : s.toCharArray() ) if ( rc[c - 'a']++ == 0 ) r++;

		for ( char c : s.toCharArray() ) {
			if (lc[c - 'a']++ == 0 ) l++;
			if (--rc[c - 'a'] == 0 ) r--;
			if ( l == r ) res++;
		}

		return res;
	}
}

