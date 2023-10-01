class Solution {
        public boolean halvesAreAlike(String s) {
            HashSet<Character> vowels = new HashSet<>();
            vowels.add('a');
            vowels.add('e');
            vowels.add('i');
            vowels.add('o');
            vowels.add('u');
            vowels.add('A');
            vowels.add('E');
            vowels.add('I');
            vowels.add('O');
            vowels.add('U');

            int len = s.length();
            String a = s.substring(0, len/2);
            String b = s.substring(len/2, len);

            int a_vowel_num = 0;
            int b_vowel_num = 0;

            for (Character c : a.toCharArray()) {
                if (vowels.contains(c)) a_vowel_num += 1;
            }

            for (Character c : b.toCharArray()) {
                if (vowels.contains(c)) b_vowel_num += 1;
            }

            if (a_vowel_num == b_vowel_num) return true;
            return false;
        }
    }
