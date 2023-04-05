# my_parser.py
import re

def parse_doc(text):
    pattern = re.compile(':doc:`([^<]+)<([^>]+)>`')
    return pattern.sub(r'[\g<1>](\g<2>)', text)

# conf.py
from docutils.parsers.rst import roles
from my_parser import parse_doc

def doc_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    link = text.strip()
    return [roles.custom_inline(rawtext, parse_doc(link), options, content)], []

roles.register_local_role('doc', doc_role)
