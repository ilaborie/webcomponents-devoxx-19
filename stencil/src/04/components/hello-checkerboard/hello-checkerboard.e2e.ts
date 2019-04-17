import { newE2EPage } from '@stencil/core/testing';

const tag = process.env.IS_SOLUTION
    ? 'hello-checkerboard-solution'
    : 'hello-checkerboard';

describe('hello-checkerboard', () => {
  it('should return 4x4 cells by default', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag}></${tag}>`);

    const element = await page.find(tag + ' >>> .checkerboard');
    expect(element.innerHTML.trim()).toEqual('<div class=\"light\">0</div><div class=\"dark\">1</div><div class=\"light\">2</div><div class=\"dark\">3</div><div class=\"dark\">4</div><div class=\"light\">5</div><div class=\"dark\">6</div><div class=\"light\">7</div><div class=\"light\">8</div><div class=\"dark\">9</div><div class=\"light\">10</div><div class=\"dark\">11</div><div class=\"dark\">12</div><div class=\"light\">13</div><div class=\"dark\">14</div><div class=\"light\">15</div>');
  });
  it('should return 10x10 cells when size=10', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${tag} size="10"></${tag}>`);

    const element = await page.find(tag + ' >>> .checkerboard');
    expect(element.innerHTML.trim()).toEqual('<div class=\"light\">0</div><div class=\"dark\">1</div><div class=\"light\">2</div><div class=\"dark\">3</div><div class=\"light\">4</div><div class=\"dark\">5</div><div class=\"light\">6</div><div class=\"dark\">7</div><div class=\"light\">8</div><div class=\"dark\">9</div><div class=\"dark\">10</div><div class=\"light\">11</div><div class=\"dark\">12</div><div class=\"light\">13</div><div class=\"dark\">14</div><div class=\"light\">15</div><div class=\"dark\">16</div><div class=\"light\">17</div><div class=\"dark\">18</div><div class=\"light\">19</div><div class=\"light\">20</div><div class=\"dark\">21</div><div class=\"light\">22</div><div class=\"dark\">23</div><div class=\"light\">24</div><div class=\"dark\">25</div><div class=\"light\">26</div><div class=\"dark\">27</div><div class=\"light\">28</div><div class=\"dark\">29</div><div class=\"dark\">30</div><div class=\"light\">31</div><div class=\"dark\">32</div><div class=\"light\">33</div><div class=\"dark\">34</div><div class=\"light\">35</div><div class=\"dark\">36</div><div class=\"light\">37</div><div class=\"dark\">38</div><div class=\"light\">39</div><div class=\"light\">40</div><div class=\"dark\">41</div><div class=\"light\">42</div><div class=\"dark\">43</div><div class=\"light\">44</div><div class=\"dark\">45</div><div class=\"light\">46</div><div class=\"dark\">47</div><div class=\"light\">48</div><div class=\"dark\">49</div><div class=\"dark\">50</div><div class=\"light\">51</div><div class=\"dark\">52</div><div class=\"light\">53</div><div class=\"dark\">54</div><div class=\"light\">55</div><div class=\"dark\">56</div><div class=\"light\">57</div><div class=\"dark\">58</div><div class=\"light\">59</div><div class=\"light\">60</div><div class=\"dark\">61</div><div class=\"light\">62</div><div class=\"dark\">63</div><div class=\"light\">64</div><div class=\"dark\">65</div><div class=\"light\">66</div><div class=\"dark\">67</div><div class=\"light\">68</div><div class=\"dark\">69</div><div class=\"dark\">70</div><div class=\"light\">71</div><div class=\"dark\">72</div><div class=\"light\">73</div><div class=\"dark\">74</div><div class=\"light\">75</div><div class=\"dark\">76</div><div class=\"light\">77</div><div class=\"dark\">78</div><div class=\"light\">79</div><div class=\"light\">80</div><div class=\"dark\">81</div><div class=\"light\">82</div><div class=\"dark\">83</div><div class=\"light\">84</div><div class=\"dark\">85</div><div class=\"light\">86</div><div class=\"dark\">87</div><div class=\"light\">88</div><div class=\"dark\">89</div><div class=\"dark\">90</div><div class=\"light\">91</div><div class=\"dark\">92</div><div class=\"light\">93</div><div class=\"dark\">94</div><div class=\"light\">95</div><div class=\"dark\">96</div><div class=\"light\">97</div><div class=\"dark\">98</div><div class=\"light\">99</div>');
  });

});
