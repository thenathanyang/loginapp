#include <iostream>
#include <string>
using namespace std;

void wrap(string& str, int lim)
{
	int spaceAt = 0;
	int charsInALine = 0;
	for (int i = 0; i < str.size(); i++)
	{	
		charsInALine++;
		if (str[i] == ' ') 
			spaceAt = i;
		if (charsInALine > lim)
		{
			str[spaceAt] = '\n';
			charsInALine = i - spaceAt;
		}
	}
}

int main()
{
	string input;
	getline(cin, input);
	wrap(input, 10);
	cout << input << endl;
}